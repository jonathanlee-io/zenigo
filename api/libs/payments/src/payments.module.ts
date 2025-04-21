import {PrismaModule} from '@app/database';
import {CacheModule} from '@nestjs/cache-manager';
import {Logger, Module} from '@nestjs/common';

import {PaymentsController} from './controllers/payments/payments.controller';
import {PaymentsRepositoryService} from './repositories/payments-repository/payments-repository.service';
import {PaymentsService} from './services/payments/payments.service';

@Module({
  imports: [PrismaModule, CacheModule.register()],
  controllers: [PaymentsController],
  providers: [
    {
      provide: Logger,
      useFactory: () => new Logger(PaymentsModule.name),
    },
    PaymentsService,
    PaymentsRepositoryService,
  ],
  exports: [PaymentsService, PaymentsRepositoryService],
})
export class PaymentsModule {}
