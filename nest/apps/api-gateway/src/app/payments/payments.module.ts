import {Module} from '@nestjs/common';

import {PaymentPlansController} from './controllers/payment-plans/payment-plans.controller';
import {PaymentPlansService} from './services/payment-plans/payment-plans.service';

@Module({
  controllers: [PaymentPlansController],
  providers: [PaymentPlansService],
})
export class PaymentsModule {}
