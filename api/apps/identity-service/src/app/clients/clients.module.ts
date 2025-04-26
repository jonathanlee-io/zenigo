import {PrismaModule} from '@app/database';
import {ConfigifyModule} from '@jdevel/configify';
import {Logger, Module} from '@nestjs/common';

import {PrismaClient as IdentityPrismaClient} from '../../../generated/client';
import {UsersModule} from '../users/users.module';
import {ClientsRepositoryService} from './repositories/clients-repository/clients-repository.service';
import {ClientsService} from './services/clients/clients.service';

@Module({
  imports: [
    ConfigifyModule.forRootAsync(),
    PrismaModule.register({client: IdentityPrismaClient}),
    UsersModule,
  ],
  providers: [
    {
      provide: Logger,
      useFactory: () => new Logger(ClientsModule.name),
    },
    ClientsRepositoryService,
    ClientsService,
  ],
})
export class ClientsModule {}
