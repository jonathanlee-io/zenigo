import {Logger, Module} from '@nestjs/common';

import {EventsModule} from '../events/events.module';
import {PaymentsModule} from '../payments/payments.module';
import {ClientsController} from './controllers/clients/clients.controller';
import {ClientsRepositoryService} from './repositories/clients-repository/clients-repository.service';
import {ClientsService} from './services/clients/clients.service';
import {PrismaModule} from '../../lib/prisma/prisma.module';
import {UsersModule} from '../users/users.module';

@Module({
  imports: [PrismaModule, UsersModule, PaymentsModule, EventsModule],
  controllers: [ClientsController],
  providers: [
    {
      provide: Logger,
      useFactory: () => new Logger(ClientsModule.name),
    },
    ClientsService,
    ClientsRepositoryService,
  ],
  exports: [ClientsService],
})
export class ClientsModule {}
