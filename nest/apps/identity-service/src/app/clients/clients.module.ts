import {IDENTITY_SERVICE_QUEUE} from '@app/comms';
import {PrismaModule} from '@app/database';
import {RabbitmqModule} from '@app/init';
import {Logger, Module} from '@nestjs/common';

import {PrismaClient as IdentityPrismaClient} from '../../../generated/client';
import {UsersModule} from '../users/users.module';
import {ClientsRepositoryService} from './repositories/clients-repository/clients-repository.service';
import {ClientsService} from './services/clients/clients.service';
import {IDENTITY_PRISMA} from '../../config/db.config';
import {ClientsController} from './controllers/clients/clients.controller';

@Module({
  imports: [
    PrismaModule.register(
      {client: IdentityPrismaClient},
      {injectionKey: IDENTITY_PRISMA},
    ),
    RabbitmqModule.register({serviceName: IDENTITY_SERVICE_QUEUE}),
    UsersModule,
  ],
  controllers: [ClientsController],
  providers: [
    {
      provide: Logger,
      useFactory: () => new Logger(ClientsModule.name),
    },
    ClientsRepositoryService,
    ClientsService,
  ],
  exports: [ClientsService],
})
export class ClientsModule {}
