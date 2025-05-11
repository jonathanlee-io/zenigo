import {Message} from '@app/comms';
import {
  AnonymousMicroserviceControllerPayload,
  AuthenticatedMicroserviceControllerPayload,
  SubmitProductFeedbackRequestDto,
} from '@app/dto';
import {IdParamDto} from '@app/validation';

export const FEEDBACK_SERVICE_QUEUE = 'FEEDBACK';

export const FEEDBACK_SERVICE = {
  // Widget Scripts
  GET_BOOTSTRAP_SCRIPT: 'GET_BOOTSTRAP_SCRIPT',
  GET_WIDGET_SCRIPT: 'GET_WIDGET_SCRIPT',
  // Products
  SUBMIT_FEEDBACK: 'SUBMIT_FEEDBACK',
  GET_PRODUCT_CONFIG: 'GET_PRODUCT_CONFIG',
  GET_FEEDBACK_FOR_PRODUCT_BY_ID: 'GET_FEEDBACK_FOR_PRODUCT_BY_ID',
} as const;

export interface FeedbackServiceContract {
  [FEEDBACK_SERVICE.GET_BOOTSTRAP_SCRIPT]: Message<
    AnonymousMicroserviceControllerPayload<never>,
    string | null
  >;

  [FEEDBACK_SERVICE.GET_WIDGET_SCRIPT]: Message<
    AnonymousMicroserviceControllerPayload<never>,
    string | null
  >;

  [FEEDBACK_SERVICE.SUBMIT_FEEDBACK]: Message<
    AnonymousMicroserviceControllerPayload<SubmitProductFeedbackRequestDto>,
    never
  >;

  [FEEDBACK_SERVICE.GET_PRODUCT_CONFIG]: Message<
    AnonymousMicroserviceControllerPayload<never>,
    never
  >;

  [FEEDBACK_SERVICE.GET_FEEDBACK_FOR_PRODUCT_BY_ID]: Message<
    AuthenticatedMicroserviceControllerPayload<
      {limit: number; offset: number} & IdParamDto
    >,
    unknown
  >;
}
