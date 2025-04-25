import {PrismaModule} from '@app/database';
import {Logger, Module} from '@nestjs/common';

import {UsersModule} from '../users/users.module';

@Module({
  imports: [PrismaModule, UsersModule],
  // controllers: [ClientsController],
  providers: [
    {
      provide: Logger,
      useFactory: () => new Logger(ClientsModule.name),
    },
    // ClientsService,
    // ClientsRepositoryService,
  ],
  // exports: [ClientsService],
})
export class ClientsModule {}
