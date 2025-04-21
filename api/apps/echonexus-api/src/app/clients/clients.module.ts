import {PrismaModule} from '@app/database';
import {PaymentsModule} from '@app/payments/payments.module';
import {UsersModule} from '@app/users/users.module';
import {Logger, Module} from '@nestjs/common';

import {EventsModule} from '../events/events.module';
import {ClientsController} from './controllers/clients/clients.controller';
import {ClientsRepositoryService} from './repositories/clients-repository/clients-repository.service';
import {ClientsService} from './services/clients/clients.service';

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
