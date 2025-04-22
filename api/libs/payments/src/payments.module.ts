import {PrismaModule} from '@app/database';
import {CacheModule} from '@nestjs/cache-manager';
import {Logger, Module} from '@nestjs/common';

@Module({
  imports: [PrismaModule, CacheModule.register()],
  // controllers: [PaymentsController],
  providers: [
    {
      provide: Logger,
      useFactory: () => new Logger(PaymentsModule.name),
    },
    // PaymentsService,
    // PaymentsRepositoryService,
  ],
  // exports: [PaymentsService, PaymentsRepositoryService],
})
export class PaymentsModule {}
