import {PAYMENTS_SERVICE_QUEUE} from '@app/comms';
import {Logger, Module} from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {ClientsModule, Transport} from '@nestjs/microservices';

import {PaymentPlansController} from './controllers/payment-plans/payment-plans.controller';
import {PaymentPlansService} from './services/payment-plans/payment-plans.service';
import {ApiGatewayEnvironment} from '../../config/environment';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: PAYMENTS_SERVICE_QUEUE,
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService<ApiGatewayEnvironment>) => ({
          transport: Transport.RMQ,
          options: {
            urls: configService.getOrThrow<string>('RABBIT_MQ_URLS').split(','),
            queue: configService.getOrThrow<string>('RABBIT_MQ_PAYMENTS_QUEUE'),
            noAck: true,
            queueOptions: {
              durable: true,
            },
          },
        }),
      },
    ]),
  ],
  controllers: [PaymentPlansController],
  providers: [
    {provide: Logger, useFactory: () => new Logger(PaymentsModule.name)},
    PaymentPlansService,
  ],
})
export class PaymentsModule {}
