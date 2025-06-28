import {PAYMENTS_SERVICE} from '@app/comms';
import {Controller} from '@nestjs/common';
import {MessagePattern} from '@nestjs/microservices';

import {PaymentsService} from '../../services/payments/payments.service';

@Controller()
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @MessagePattern(PAYMENTS_SERVICE.GET_PAYMENT_PLANS)
  async getPlans() {
    return this.paymentsService.getPlans();
  }
}
