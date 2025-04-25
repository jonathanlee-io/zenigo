import {PrismaModule} from '@app/database';
import {Module} from '@nestjs/common';

import {PrismaClient as PaymentsPrismaClient} from '../../generated/client';

@Module({
  imports: [PrismaModule.register({client: PaymentsPrismaClient})],
  controllers: [],
  providers: [],
})
export class PaymentsServiceModule {}
