import {Message} from '@app/comms';
import {
  AnonymousMicroserviceControllerPayload,
  AuthenticatedMicroserviceControllerPayload,
  CreateFeatureFlagProjectResponseDto,
  FeatureFlagBatchResponseDto,
} from '@app/dto';

export const FEATURE_FLAGS_QUEUE = 'FEATURE_FLAGS';

export const FEATURE_FLAGS_SERVICE = {
  GET_ALL_FLAGS: 'GET_ALL_FLAGS',
  CREATE_FEATURE_FLAG_PROJECT: 'CREATE_FEATURE_FLAG_PROJECT',
} as const;

export interface FeatureFlagsServiceContract {
  [FEATURE_FLAGS_SERVICE.GET_ALL_FLAGS]: Message<
    AnonymousMicroserviceControllerPayload<{
      apiKey: string;
      userEmail: string | undefined;
    }>,
    FeatureFlagBatchResponseDto
  >;

  [FEATURE_FLAGS_SERVICE.CREATE_FEATURE_FLAG_PROJECT]: Message<
    AuthenticatedMicroserviceControllerPayload<{
      projectName: string;
      clientId: string;
    }>,
    CreateFeatureFlagProjectResponseDto
  >;
}
