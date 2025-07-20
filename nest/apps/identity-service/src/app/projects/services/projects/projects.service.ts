import * as fs from 'node:fs';
import * as path from 'node:path';

import {
  FEATURE_FLAGS_QUEUE,
  FEATURE_FLAGS_SERVICE,
  FeatureFlagsServiceContract,
  TypedClientProxy,
} from '@app/comms';
import {MicroserviceSendResult} from '@app/dto';
import {CreateClientProjectDto} from '@app/dto/identity/CreateClientProjectDto';
import {HelpersUtil} from '@app/util';
import {MicroserviceSendResultBuilder} from '@app/util/microservice-send-result.helper';
import {
  HttpStatus,
  Inject,
  Injectable,
  Logger,
  OnModuleInit,
} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import {ClientProxy} from '@nestjs/microservices';

import {PaymentsService} from '../../../../../../payments-service/src/app/payments/services/payments/payments.service';
import {IdentityEnvironment} from '../../../../config/environment';
import {ClientsService} from '../../../clients/services/clients/clients.service';
import {UsersRepositoryService} from '../../../users/repositories/users-repository/users-repository.service';
import {ProjectsRepositoryService} from '../../repositories/projects-repository/projects-repository.service';

@Injectable()
export class ProjectsService implements OnModuleInit {
  private readonly featureFlagsClient: TypedClientProxy<
    keyof FeatureFlagsServiceContract,
    FeatureFlagsServiceContract
  >;
  constructor(
    private readonly logger: Logger,
    private readonly usersRepository: UsersRepositoryService,
    private readonly projectsRepository: ProjectsRepositoryService,
    private readonly clientsService: ClientsService,
    private readonly configService: ConfigService<IdentityEnvironment>,
    @Inject(FEATURE_FLAGS_QUEUE)
    readonly untypedFeatureFlagsClient: ClientProxy,
  ) {
    this.featureFlagsClient = new TypedClientProxy(untypedFeatureFlagsClient);
  }

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
      const createdClientResult = await this.clientsService.createClient(
        adminUserRecord.email,
        {
          clientDisplayName: 'Zenigo',
          paymentPlanId: PaymentsService.paymentPlans[0].id,
        },
      );
      await this.createProject(
        {
          requestingUserEmail: adminUserRecord.email,
          requestingUserId: adminUserRecord.supabaseUserId,
          ip: '::',
          clientSubdomain: 'www',
        },
        {
          clientId: createdClientResult.clientId,
          name: 'Zenigo',
          subdomain: 'www',
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
      clientSubdomain,
      ip,
    }: {
      requestingUserId: string;
      requestingUserEmail: string;
      clientSubdomain: string;
      ip: string;
    },
    createProjectDto: CreateClientProjectDto,
  ): Promise<MicroserviceSendResult<unknown>> {
    const client = await this.clientsService.getClientByClientId({
      clientId: createProjectDto.clientId,
      requestingUserEmail,
    });
    if (!client) {
      return MicroserviceSendResultBuilder.notFound();
    }
    if (
      !client.admins.map((admin) => admin.email).includes(requestingUserEmail)
    ) {
      return MicroserviceSendResultBuilder.forbidden();
    }
    if (
      !(
        await this.clientsService.checkIfSubdomainAvailable({
          subdomain: createProjectDto.subdomain,
        })
      ).isSubdomainAvailable
    ) {
      return MicroserviceSendResultBuilder.status(HttpStatus.BAD_REQUEST)
        .data('Subdomain already exists')
        .build();
    }
    try {
      const createdClientProject = await this.projectsRepository.create(
        requestingUserEmail,
        createProjectDto,
      );
      this.logger.log(`Created client project`, createdClientProject);
      const createdFeatureFlagProject = await this.featureFlagsClient.sendAsync(
        FEATURE_FLAGS_SERVICE.CREATE_FEATURE_FLAG_PROJECT,
        {
          clientSubdomain,
          clientIp: ip,
          data: {
            clientId: createdClientProject.client.id,
            projectName: createdClientProject.name,
          },
          authenticatedUser: {email: requestingUserEmail, id: requestingUserId},
        },
      );
      this.logger.log(
        `Created feature flag project`,
        createdFeatureFlagProject,
      );
      return MicroserviceSendResultBuilder.ok({
        createdClientProject,
        createdFeatureFlagProject,
      });
    } catch (e) {
      return MicroserviceSendResultBuilder.status(
        HttpStatus.INTERNAL_SERVER_ERROR,
      )
        .data(e.message)
        .build();
    }
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

    return !project
      ? MicroserviceSendResultBuilder.notFound()
      : MicroserviceSendResultBuilder.ok(project);
  }

  async generateAndStoreApiKey({
    requestingUserEmail,
    clientSubdomain,
    prefixCharacters,
  }: {
    requestingUserEmail: string;
    clientSubdomain: string;
    prefixCharacters: string;
  }): Promise<MicroserviceSendResult<{apiKey: string} | null>> {
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
      requestingUserEmail,
      clientId: project.clientId,
    });
    if (
      !client.admins.map((admin) => admin.email).includes(requestingUserEmail)
    ) {
      return MicroserviceSendResultBuilder.forbidden();
    }
    const {hashed: hashedApiKey, raw: rawApiKey} =
      HelpersUtil.generateApiKey(prefixCharacters);
    await this.projectsRepository.updateProjectFeatureFlagsApiKeyById({
      projectId: project.id,
      hashedKey: hashedApiKey,
    });
    return MicroserviceSendResultBuilder.ok({apiKey: rawApiKey});
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
