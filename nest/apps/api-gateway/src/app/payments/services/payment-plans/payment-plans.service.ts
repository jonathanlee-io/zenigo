import {
  PAYMENTS_SERVICE,
  PAYMENTS_SERVICE_QUEUE,
  PaymentsServiceContract,
  TypedClientProxy,
} from '@app/comms';
import {Inject, Injectable, Logger} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';

@Injectable()
export class PaymentPlansService {
  private readonly paymentsClient: TypedClientProxy<
    keyof PaymentsServiceContract,
    PaymentsServiceContract
  >;

  constructor(
    private readonly logger: Logger,
    @Inject(PAYMENTS_SERVICE_QUEUE) readonly untypedPaymentsClient: ClientProxy,
  ) {
    this.paymentsClient = new TypedClientProxy(untypedPaymentsClient);
  }

  async getPlans({
    clientSubdomain,
    ip: clientIp,
  }: {
    clientSubdomain: string;
    ip: string;
  }) {
    return this.paymentsClient.sendAsync(PAYMENTS_SERVICE.GET_PAYMENT_PLANS, {
      clientIp,
      clientSubdomain,
      data: null as never,
    });
  }
}
