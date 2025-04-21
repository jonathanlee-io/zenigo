import {PrismaModule} from '@app/database';
import {PaymentsModule} from '@app/payments';
import {UsersModule} from '@app/users';
import {Logger, Module} from '@nestjs/common';

import {ClientsController} from './controllers/clients/clients.controller';
import {ClientsRepositoryService} from './repositories/clients-repository/clients-repository.service';
import {ClientsService} from './services/clients/clients.service';

@Module({
  imports: [PrismaModule, UsersModule, PaymentsModule],
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
