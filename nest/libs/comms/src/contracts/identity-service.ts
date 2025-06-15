import {Message} from '@app/comms';
import {
  AnonymousMicroserviceControllerPayload,
  AuthenticatedMicroserviceControllerPayload,
  POSTSuccessDto,
  ProjectDto,
} from '@app/dto';
import {IdParamDto} from '@app/validation';

export const IDENTITY_SERVICE_QUEUE = 'IDENTITY';

export const IDENTITY_SERVICE = {
  // Users
  USER_CHECK_IN: 'USER_CHECK_IN',
  ANONYMOUS_USER_CHECK_IN: 'ANONYMOUS_USER_CHECK_IN',
  // Projects
  GET_PROJECT_BY_ID: 'GET_PROJECT_BY_ID',
  GET_PROJECT_BY_CLIENT_SUBDOMAIN: 'GET_PROJECT_BY_CLIENT_SUBDOMAIN',
  GENERATE_AND_STORE_API_KEY: 'GENERATE_AND_STORE_API_KEY',
} as const;

export interface IdentityServiceContract {
  [IDENTITY_SERVICE.USER_CHECK_IN]: Message<
    AuthenticatedMicroserviceControllerPayload<never>,
    POSTSuccessDto & {isCreatedNew: boolean}
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
}
