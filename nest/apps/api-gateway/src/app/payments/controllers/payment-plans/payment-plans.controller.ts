import {CurrentUser, CurrentUserDto, IsPublic} from '@app/auth';
import {HttpHelpersUtil} from '@app/util';
import {CacheInterceptor, CacheKey} from '@nestjs/cache-manager';
import {Controller, Get, Ip, UseInterceptors} from '@nestjs/common';
import {CacheTTL} from '@nestjs/common/cache';

import {PaymentPlansService} from '../../services/payment-plans/payment-plans.service';

@Controller('plans')
export class PaymentPlansController {
  constructor(private readonly paymentPlansService: PaymentPlansService) {}

  @IsPublic()
  @UseInterceptors(CacheInterceptor)
  @CacheKey('PAYMENTS_SERVICE_PAYMENT_PLANS')
  @CacheTTL(60 * 60 * 24)
  @Get()
  async getPlans(
    @CurrentUser() {clientSubdomain}: CurrentUserDto,
    @Ip() ip: string,
  ) {
    const result = await this.paymentPlansService.getPlans({
      clientSubdomain,
      ip,
    });
    return HttpHelpersUtil.returnDataOrThrowError(result);
  }
}
