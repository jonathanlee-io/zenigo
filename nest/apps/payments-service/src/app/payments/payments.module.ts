import {PAYMENTS_SERVICE_QUEUE} from '@app/comms';
import {PrismaModule} from '@app/database';
import {RabbitmqModule} from '@app/init';
import {createKeyv} from '@keyv/redis';
import {CacheModule} from '@nestjs/cache-manager';
import {Logger, Module} from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';

import {PaymentsController} from './controllers/payments/payments.controller';
import {PaymentsRepositoryService} from './repositories/payments-repository/payments-repository.service';
import {PaymentsService} from './services/payments/payments.service';
import {PrismaClient as PaymentsPrismaClient} from '../../../generated/client';
import {PAYMENTS_PRISMA} from '../../config/db.config';
import {PaymentsEnvironment} from '../../config/environment';

@Module({
  imports: [
    PrismaModule.register(
      {client: PaymentsPrismaClient},
      {injectionKey: PAYMENTS_PRISMA},
    ),
    CacheModule.registerAsync({
      isGlobal: true,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService<PaymentsEnvironment>) => {
        return {
          stores: [createKeyv({url: configService.getOrThrow('REDIS_URL')})],
        };
      },
    }),
    RabbitmqModule.register({serviceName: PAYMENTS_SERVICE_QUEUE}),
  ],
  controllers: [PaymentsController],
  providers: [
    {provide: Logger, useFactory: () => new Logger(PaymentsModule.name)},
    PaymentsRepositoryService,
    PaymentsService,
  ],
})
export class PaymentsModule {}
