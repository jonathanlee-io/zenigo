import {CurrentUser, CurrentUserDto, IsPublic} from '@app/auth';
import {HttpHelpersUtil} from '@app/util';
import {Controller, Get, Ip, Logger} from '@nestjs/common';

import {PaymentPlansService} from '../../services/payment-plans/payment-plans.service';

@Controller('plans')
export class PaymentPlansController {
  constructor(private readonly paymentPlansService: PaymentPlansService) {}

  @IsPublic()
  @Get()
  async getPlans(
    @CurrentUser() {clientSubdomain}: CurrentUserDto,
    @Ip() ip: string,
  ) {
    const result = await this.paymentPlansService.getPlans({
      clientSubdomain,
      ip,
    });
    Logger.log(result);
    return HttpHelpersUtil.returnDataOrThrowError(result);
  }
}
