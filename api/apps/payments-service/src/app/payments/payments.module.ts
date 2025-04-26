import {PrismaModule} from '@app/database';
import {CacheModule} from '@nestjs/cache-manager';
import {Logger, Module} from '@nestjs/common';

import {PaymentsController} from './controllers/payments/payments.controller';
import {PaymentsRepositoryService} from './repositories/payments-repository/payments-repository.service';
import {PaymentsService} from './services/payments/payments.service';
import {PrismaClient as PaymentsPrismaClient} from '../../../generated/client';

@Module({
  imports: [
    PrismaModule.register({client: PaymentsPrismaClient}),
    CacheModule.register(),
  ],
  controllers: [PaymentsController],
  providers: [
    {provide: Logger, useFactory: () => new Logger(PaymentsModule.name)},
    PaymentsRepositoryService,
    PaymentsService,
  ],
})
export class PaymentsModule {}
