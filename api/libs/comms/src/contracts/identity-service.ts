import {Message} from '@app/comms';
import {
  AnonymousMicroserviceControllerPayload,
  AuthenticatedMicroserviceControllerPayload,
  ProjectDto,
} from '@app/dto';
import {IdParamDto} from '@app/validation';

export const IDENTITY_SERVICE_QUEUE = 'IDENTITY';

export const IDENTITY_SERVICE = {
  // Projects
  GET_PROJECT_BY_ID: 'GET_PROJECT_BY_ID',
  GET_PROJECT_BY_CLIENT_SUBDOMAIN: 'GET_PROJECT_BY_CLIENT_SUBDOMAIN',
} as const;

export interface IdentityServiceContract {
  [IDENTITY_SERVICE.GET_PROJECT_BY_ID]: Message<
    AuthenticatedMicroserviceControllerPayload<IdParamDto>,
    ProjectDto | null
  >;

  [IDENTITY_SERVICE.GET_PROJECT_BY_CLIENT_SUBDOMAIN]: Message<
    AnonymousMicroserviceControllerPayload<never>,
    ProjectDto | null
  >;
}
