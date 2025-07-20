import * as fs from 'node:fs';
import * as path from 'node:path';

import {MicroserviceSendResult} from '@app/dto';
import {CreateProjectDto} from '@app/dto/identity/CreateProject.dto';
import {HelpersUtil} from '@app/util';
import {
  BadRequestException,
  ForbiddenException,
  HttpStatus,
  Injectable,
  Logger,
  OnModuleInit,
} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';

import {IdentityEnvironment} from '../../../../config/environment';
import {ClientsService} from '../../../clients/services/clients/clients.service';
import {UsersRepositoryService} from '../../../users/repositories/users-repository/users-repository.service';
import {ProjectsRepositoryService} from '../../repositories/projects-repository/projects-repository.service';

@Injectable()
export class ProjectsService implements OnModuleInit {
  constructor(
    private readonly logger: Logger,
    private readonly usersRepository: UsersRepositoryService,
    private readonly projectsRepository: ProjectsRepositoryService,
    private readonly clientsService: ClientsService,
    private readonly configService: ConfigService<IdentityEnvironment>,
  ) {}

  async onModuleInit() {
    const adminUserRecord = await this.usersRepository.findByEmail(
      this.configService.getOrThrow('ADMIN_EMAIL'),
    );
    if (!adminUserRecord) {
      this.logger.log(
        `Unable to create default project as admin user does not exist, skipping...`,
      );
      return;
    }
    const [defaultProject] = await this.projectsRepository.findBySubdomain(
      'www',
      {isIncludeClient: true},
    );
    if (!defaultProject) {
      this.logger.log('Creating default project as no project exists yet');
      await this.createProject(
        {
          clientSubdomain: 'www',
          requestingUserId: adminUserRecord.supabaseUserId,
          requestingUserEmail: adminUserRecord.email,
        },
        {
          clientId: defaultProject.clientId,
          name: 'Zenigo',
          subdomain: 'www',
          isBugReportsEnabled: true,
          isFeatureRequestsEnabled: true,
          isFeatureFeedbackEnabled: true,
        },
      );
      const apiKey = HelpersUtil.generateApiKey('ff');
      await this.projectsRepository.updateProjectFeatureFlagsApiKeyById({
        projectId: defaultProject.id,
        hashedKey: apiKey.hashed,
      });
      this.logger.log(
        `Default project created successfully with API Key: ${apiKey.raw}`,
      );
    }
  }

  async createProject(
    {
      requestingUserId,
      requestingUserEmail,
    }: {
      requestingUserId: string;
      requestingUserEmail: string;
      clientSubdomain: string;
    },
    createProjectDto: CreateProjectDto,
  ) {
    const client = await this.clientsService.getClientById({
      requestingUserId,
      requestingUserEmail,
      clientId: createProjectDto.clientId,
    });
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
    const client = await this.clientsService.getClientById({
      requestingUserId,
      requestingUserEmail,
      clientId: project.clientId,
    });
    if (
      !client.admins.map((admin) => admin.email).includes(requestingUserEmail)
    ) {
      return {
        status: HttpStatus.FORBIDDEN,
        data: null,
      };
    }
    const {hashed: hashedApiKey, raw: rawApiKey} =
      HelpersUtil.generateApiKey(prefixCharacters);
    await this.projectsRepository.updateProjectFeatureFlagsApiKeyById({
      projectId: project.id,
      hashedKey: hashedApiKey,
    });
    return {
      status: HttpStatus.OK,
      data: {
        apiKey: rawApiKey,
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
