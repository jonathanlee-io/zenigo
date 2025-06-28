import {IsPublic} from '@app/auth';
import {Controller, Get} from '@nestjs/common';

import {PaymentPlansService} from '../../services/payment-plans/payment-plans.service';

@Controller('plans')
export class PaymentPlansController {
  constructor(private readonly paymentPlansService: PaymentPlansService) {}

  @IsPublic()
  @Get()
  async getPlans() {
    return this.paymentPlansService.getPlans();
  }
}
