import {PrismaModule} from '@app/database';
import {Logger, Module} from '@nestjs/common';

import {ClientsModule} from '../clients/clients.module';
import {UsersModule} from '../users/users.module';

@Module({
  imports: [PrismaModule, ClientsModule, UsersModule],
  // controllers: [ProjectsController],
  providers: [
    {
      provide: Logger,
      useFactory: () => new Logger(ProjectsModule.name),
    },
    // ProjectsService,
    // ProjectsRepositoryService,
  ],
  // exports: [ProjectsService],
})
export class ProjectsModule {}
