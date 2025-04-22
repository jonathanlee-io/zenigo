import { Controller, Get } from '@nestjs/common';
import { PaymentsServiceService } from './payments-service.service';

@Controller()
export class PaymentsServiceController {
  constructor(private readonly paymentsServiceService: PaymentsServiceService) {}

  @Get()
  getHello(): string {
    return this.paymentsServiceService.getHello();
  }
}
