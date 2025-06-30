import {PAYMENTS_SERVICE_QUEUE} from '@app/comms';
import {RabbitmqModule} from '@app/init';
import {Logger, Module} from '@nestjs/common';

import {PaymentPlansController} from './controllers/payment-plans/payment-plans.controller';
import {PaymentPlansService} from './services/payment-plans/payment-plans.service';
import {StripeService} from './services/stripe/stripe.service';

@Module({
  imports: [RabbitmqModule.register({serviceName: PAYMENTS_SERVICE_QUEUE})],
  controllers: [PaymentPlansController],
  providers: [
    {provide: Logger, useFactory: () => new Logger(PaymentsModule.name)},
    PaymentPlansService,
    StripeService,
  ],
  exports: [StripeService],
})
export class PaymentsModule {}
