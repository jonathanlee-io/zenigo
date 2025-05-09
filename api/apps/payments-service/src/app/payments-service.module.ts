import {CacheModule} from '@nestjs/cache-manager';
import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';

import {PaymentsModule} from './payments/payments.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/payments-service/.env',
    }),
    CacheModule.register(),
    PaymentsModule,
  ],
})
export class PaymentsServiceModule {}
