import {Message} from '@app/comms';
import {AnonymousMicroserviceControllerPayload, PaymentPlanDto} from '@app/dto';

export const PAYMENTS_SERVICE_QUEUE = 'PAYMENTS';

export const PAYMENTS_SERVICE = {
  GET_PAYMENT_PLANS: 'GET_PAYMENT_PLANS',
} as const;

export interface PaymentsServiceContract {
  [PAYMENTS_SERVICE.GET_PAYMENT_PLANS]: Message<
    AnonymousMicroserviceControllerPayload<never>,
    PaymentPlanDto[]
  >;
}
