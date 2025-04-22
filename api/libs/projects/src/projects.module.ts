import {ClientsModule} from '@app/clients';
import {PrismaModule} from '@app/database';
import {UsersModule} from '@app/users';
import {Logger, Module} from '@nestjs/common';

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
