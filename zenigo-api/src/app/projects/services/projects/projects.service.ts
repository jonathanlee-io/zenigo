import * as fs from 'node:fs';
import * as path from 'node:path';

import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import {ApplicationConfig} from '../../../../lib/config/Application.config';
import {ClientsService} from '../../../clients/services/clients/clients.service';
import {CreateProjectDto} from '../../dto/CreateProject.dto';
import {UpdateProjectDto} from '../../dto/UpdateProject.dto';
import {ProjectsRepositoryService} from '../../repositories/projects-repository/projects-repository.service';

@Injectable()
export class ProjectsService {
  constructor(
    private readonly projectsRepository: ProjectsRepositoryService,
    private readonly clientsService: ClientsService,
    private readonly applicationConfig: ApplicationConfig,
  ) {}

  async createProject(
    requestingUserId: string,
    createProjectDto: CreateProjectDto,
  ) {
    const client = await this.clientsService.getClientById(
      requestingUserId,
      createProjectDto.clientId,
    );
    if (
      !client.admins
        .map((admin) => admin.supabaseUserId)
        .includes(requestingUserId)
    ) {
      throw new ForbiddenException();
    }
    if (
      !(
        await this.clientsService.checkIfSubdomainAvailable({
          subdomain: createProjectDto.subdomain,
        })
      ).isSubdomainAvailable
    ) {
      return new BadRequestException('Subdomain already exists');
    }
    return this.projectsRepository.create(requestingUserId, createProjectDto);
  }

  async getProjectsWhereInvolved(requestingUserId: string) {
    return this.projectsRepository.getProjectsWhereInvolved(requestingUserId);
  }

  async getProjectById(requestingUserId: string, projectId: string) {
    const project = await this.projectsRepository.findById(projectId);
    await this.clientsService.getClientById(requestingUserId, project.clientId); // Will throw not found or forbidden exception
    return project;
  }

  async updateProjectById(
    requestingUserId: string,
    projectId: string,
    updateProjectDto: UpdateProjectDto,
  ) {
    const project = await this.projectsRepository.findById(projectId);
    const client = await this.clientsService.getClientById(
      requestingUserId,
      project.clientId,
    ); // Will throw not found or forbidden exception
    if (
      !client.admins
        .map((admin) => admin.supabaseUserId)
        .includes(requestingUserId)
    ) {
      throw new ForbiddenException();
    }
    return this.projectsRepository.updateProjectById(
      projectId,
      updateProjectDto,
    );
  }

  async getProjectsForClient(requestingUserId: string, clientId: string) {
    await this.clientsService.getClientById(requestingUserId, clientId); // Will throw not found or forbidden exception
    return this.projectsRepository.getProjectsForClient(clientId);
  }

  async getFeedbackWidgetScript(clientSubdomain: string) {
    if (
      !clientSubdomain ||
      clientSubdomain === 'www' ||
      clientSubdomain === 'zenigo'
    ) {
      return this.generateWidgetInitScript(clientSubdomain, {
        name: 'zenigo',
        subdomain: clientSubdomain,
        isBugReportsEnabled: true,
        isFeatureRequestsEnabled: true,
        isFeatureFeedbackEnabled: true,
      });
    }
    const [project] =
      await this.projectsRepository.findBySubdomain(clientSubdomain);
    return this.generateWidgetInitScript(clientSubdomain, {
      ...project,
    });
  }

  async getWidgetScript() {
    return fs.readFileSync(
      path.join(__dirname, '../../../../..', 'widget/dist/zenigo-widget.js'),
      'utf8',
    );
  }

  async deleteProjectById(requestingUserId: string, projectId: string) {
    const project = await this.projectsRepository.findById(projectId);
    if (!project) {
      throw new NotFoundException(
        `Could not find project with id: ${projectId}`,
      );
    }
    const client = await this.clientsService.getClientById(
      requestingUserId,
      project.clientId,
    );
    if (
      !client.admins
        .map((admin) => admin.supabaseUserId)
        .includes(requestingUserId)
    ) {
      throw new ForbiddenException();
    }
    return this.projectsRepository.deleteProjectById(projectId);
  }

  async getProjectFromSubdomain(clientSubdomain: string) {
    return this.projectsRepository.findBySubdomain(clientSubdomain, {
      isIncludeClient: true,
      isIncludeCreatedBy: true,
    });
  }

  private async generateWidgetInitScript(
    clientSubdomain: string,
    returnedProject: unknown,
  ) {
    let widgetSrc: string;
    if (this.applicationConfig.nodeEnv === 'production') {
      widgetSrc = `https://${clientSubdomain}.api.zenigo.io/v1/scripts/zenigo-widget.js`;
    } else if (this.applicationConfig.nodeEnv === 'staging') {
      widgetSrc = `https://${clientSubdomain}.api.zenigo-staging.com/v1/scripts/zenigo-widget.js`;
    } else {
      widgetSrc = `http://${clientSubdomain}.api.zenigo-local.io:8000/v1/scripts/zenigo-widget.js`;
    }

    let paramProject = {};
    if (returnedProject && typeof returnedProject === 'object') {
      paramProject = {...returnedProject, subdomain: clientSubdomain};
    }

    return `
        (function (w,d,s,o,f,js,fjs) {
            w['JS-Widget']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
            js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
            js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
        }(window, document, 'script', 'mw', '${widgetSrc}'));
        mw('init', { project: ${
          returnedProject ? JSON.stringify(paramProject) : null
        } } );
        mw('message', { project: ${
          returnedProject ? JSON.stringify(paramProject) : null
        } });
    `;
  }
}
