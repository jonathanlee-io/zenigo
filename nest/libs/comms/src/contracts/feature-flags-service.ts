import {Message} from '@app/comms';
import {AnonymousMicroserviceControllerPayload} from '@app/dto';
import {FeatureFlagBatchResponseDto} from '@app/dto/flags/FeatureFlagBatchResponse.dto';

export const FEATURE_FLAGS_QUEUE = 'FEATURE_FLAGS';

export const FEATURE_FLAGS_SERVICE = {
  GET_ALL_FLAGS: 'GET_ALL_FLAGS',
} as const;

export interface FeatureFlagsServiceContract {
  [FEATURE_FLAGS_SERVICE.GET_ALL_FLAGS]: Message<
    AnonymousMicroserviceControllerPayload<{apiKey: string}>,
    FeatureFlagBatchResponseDto
  >;
}
