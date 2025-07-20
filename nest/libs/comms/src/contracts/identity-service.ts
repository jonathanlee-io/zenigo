import {Message} from '@app/comms';
import {
  AnonymousMicroserviceControllerPayload,
  AuthenticatedMicroserviceControllerPayload,
  ClientDto,
  CreateProjectDto,
  POSTSuccessDto,
  ProjectDto,
} from '@app/dto';
import {IdParamDto} from '@app/validation';

export const IDENTITY_SERVICE_QUEUE = 'IDENTITY';

export const IDENTITY_SERVICE = {
  // Users
  USER_CHECK_IN: 'USER_CHECK_IN',
  ANONYMOUS_USER_CHECK_IN: 'ANONYMOUS_USER_CHECK_IN',
  // Clients
  GET_CLIENT_BY_CLIENT_SUBDOMAIN: 'GET_CLIENT_BY_CLIENT_SUBDOMAIN',
  GET_CLIENT_BY_CLIENT_ID: 'GET_CLIENT_BY_CLIENT_ID',
  // Projects
  GET_PROJECT_BY_ID: 'GET_PROJECT_BY_ID',
  GET_PROJECT_BY_CLIENT_SUBDOMAIN: 'GET_PROJECT_BY_CLIENT_SUBDOMAIN',
  GENERATE_AND_STORE_API_KEY: 'GENERATE_AND_STORE_API_KEY',
  CREATE_PROJECT: 'CREATE_PROJECT',
  // Subdomains
  GET_SUBDOMAIN_AVAILABILITY: 'GET_SUBDOMAIN_AVAILABILITY',
} as const;

export interface IdentityServiceContract {
  [IDENTITY_SERVICE.USER_CHECK_IN]: Message<
    AuthenticatedMicroserviceControllerPayload<never>,
    POSTSuccessDto & {isCreatedNew: boolean}
  >;

  [IDENTITY_SERVICE.GET_CLIENT_BY_CLIENT_SUBDOMAIN]: Message<
    AuthenticatedMicroserviceControllerPayload<never>,
    ClientDto | null
  >;

  [IDENTITY_SERVICE.GET_CLIENT_BY_CLIENT_ID]: Message<
    AuthenticatedMicroserviceControllerPayload<{clientId: string}>,
    ClientDto | null
  >;

  [IDENTITY_SERVICE.ANONYMOUS_USER_CHECK_IN]: Message<
    AnonymousMicroserviceControllerPayload<{apiKey: string; userEmail: string}>,
    POSTSuccessDto & {isCreatedNew: boolean}
  >;

  [IDENTITY_SERVICE.GET_PROJECT_BY_ID]: Message<
    AuthenticatedMicroserviceControllerPayload<IdParamDto>,
    ProjectDto | null
  >;

  [IDENTITY_SERVICE.GET_PROJECT_BY_CLIENT_SUBDOMAIN]: Message<
    AnonymousMicroserviceControllerPayload<never>,
    ProjectDto | null
  >;

  [IDENTITY_SERVICE.GENERATE_AND_STORE_API_KEY]: Message<
    AuthenticatedMicroserviceControllerPayload<{projectId: string}>,
    {rawApiKey: string}
  >;

  [IDENTITY_SERVICE.GET_SUBDOMAIN_AVAILABILITY]: Message<
    AuthenticatedMicroserviceControllerPayload<{subdomain: string}>,
    {isSubdomainAvailable: boolean}
  >;

  [IDENTITY_SERVICE.CREATE_PROJECT]: Message<
    AuthenticatedMicroserviceControllerPayload<CreateProjectDto>,
    {isSuccessfullyCreated: boolean}
  >;
}
