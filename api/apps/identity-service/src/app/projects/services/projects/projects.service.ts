import {createHash} from 'crypto';
import * as fs from 'node:fs';
import * as path from 'node:path';

import {MicroserviceSendResult} from '@app/dto';
import {CreateProjectDto} from '@app/dto/identity/CreateProject.dto';
import {UpdateProjectDto} from '@app/dto/identity/UpdateProject.dto';
import {
  BadRequestException,
  ForbiddenException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import {v4} from 'uuid';

import {IdentityEnvironment} from '../../../../config/environment';
import {ClientsService} from '../../../clients/services/clients/clients.service';
import {ProjectsRepositoryService} from '../../repositories/projects-repository/projects-repository.service';

@Injectable()
export class ProjectsService {
  constructor(
    private readonly projectsRepository: ProjectsRepositoryService,
    private readonly clientsService: ClientsService,
    private readonly configService: ConfigService<IdentityEnvironment>,
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
      path.join(__dirname, '../../../../..', 'widget/dist/feedback-widget.js'),
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

  async getProjectFromSubdomain(
    clientSubdomain: string,
  ): Promise<MicroserviceSendResult<unknown>> {
    const [project] = await this.projectsRepository.findBySubdomain(
      clientSubdomain,
      {isIncludeCreatedBy: true, isIncludeClient: true},
    );
    if (!project) {
      return {
        status: HttpStatus.NOT_FOUND,
        data: null,
      };
    }
    return {
      status: HttpStatus.OK,
      data: project,
    };
  }

  async generateAndStoreApiKey({
    requestingUserId,
    requestingUserEmail,
    clientSubdomain,
    prefixCharacters,
  }: {
    requestingUserId: string;
    requestingUserEmail: string;
    clientSubdomain: string;
    prefixCharacters: string;
  }): Promise<MicroserviceSendResult<{apiKey: string}>> {
    const [project] =
      await this.projectsRepository.findBySubdomain(clientSubdomain);
    if (!project) {
      return {
        status: HttpStatus.NOT_FOUND,
        data: null,
        errorMessage: `Could not find project with subdomain: ${clientSubdomain}`,
      };
    }
    const client = await this.clientsService.getClientById(
      requestingUserId,
      project.clientId,
    );
    if (
      !client.admins.map((admin) => admin.email).includes(requestingUserEmail)
    ) {
      return {
        status: HttpStatus.FORBIDDEN,
        data: null,
      };
    }
    const rawKey = `${prefixCharacters}_${v4().replace(/-/g, '')}`;
    const hashedKey = createHash('sha256')
      .update(rawKey)
      .digest('hex')
      .toString();
    await this.projectsRepository.updateProjectFeatureFlagsApiKeyById({
      projectId: project.id,
      hashedKey,
    });
    return {
      status: HttpStatus.OK,
      data: {
        apiKey: rawKey,
      },
    };
  }

  private async generateWidgetInitScript(
    clientSubdomain: string,
    returnedProject: unknown,
  ) {
    let widgetSrc: string;
    if (this.configService.getOrThrow('NODE_ENV') === 'production') {
      widgetSrc = `https://${clientSubdomain}.api.zenigo.io/v1/scripts/feedback-widget.js`;
    } else if (this.configService.getOrThrow('NODE_ENV') === 'staging') {
      widgetSrc = `https://${clientSubdomain}.api.zenigo-staging.com/v1/scripts/feedback-widget.js`;
    } else {
      widgetSrc = `http://${clientSubdomain}.api.zenigo-local.io:8000/v1/scripts/feedback-widget.js`;
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
        mw('init', { project: ${returnedProject ? JSON.stringify(paramProject) : null} } );
        mw('message', { project: ${returnedProject ? JSON.stringify(paramProject) : null} });
    `;
  }
}
