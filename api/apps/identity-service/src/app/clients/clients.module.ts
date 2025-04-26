import {PrismaModule} from '@app/database';
import {Logger, Module} from '@nestjs/common';

import {PrismaClient as IdentityPrismaClient} from '../../../generated/client';
import {UsersModule} from '../users/users.module';

@Module({
  imports: [PrismaModule.register({client: IdentityPrismaClient}), UsersModule],
  providers: [
    {
      provide: Logger,
      useFactory: () => new Logger(ClientsModule.name),
    },
  ],
})
export class ClientsModule {}
