import {Module} from '@nestjs/common';

import {PaymentsServiceController} from './payments-service.controller';
import {PaymentsServiceService} from './payments-service.service';

@Module({
  imports: [],
  controllers: [PaymentsServiceController],
  providers: [PaymentsServiceService],
})
export class PaymentsServiceModule {}
