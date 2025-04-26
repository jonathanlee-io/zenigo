import {PrismaModule} from '@app/database';
import {ConfigifyModule} from '@jdevel/configify';
import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';

import {PrismaClient as PaymentsPrismaClient} from '../../generated/client';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ConfigifyModule.forRootAsync(),
    PrismaModule.register({client: PaymentsPrismaClient}),
  ],
  controllers: [],
  providers: [],
})
export class PaymentsServiceModule {}
