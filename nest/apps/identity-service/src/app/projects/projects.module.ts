import {PrismaModule} from '@app/database';
import {Logger, Module} from '@nestjs/common';

import {PrismaClient as IdentityPrismaClient} from '../../../generated/client';
import {IDENTITY_PRISMA} from '../../config/db.config';
import {ClientsModule} from '../clients/clients.module';
import {UsersModule} from '../users/users.module';
import {ProjectsController} from './controllers/projects/projects.controller';
import {ProjectsRepositoryService} from './repositories/projects-repository/projects-repository.service';
import {ProjectsService} from './services/projects/projects.service';

@Module({
  imports: [
    PrismaModule.register(
      {client: IdentityPrismaClient},
      {injectionKey: IDENTITY_PRISMA},
    ),
    ClientsModule,
    UsersModule,
  ],
  controllers: [ProjectsController],
  providers: [
    {
      provide: Logger,
      useFactory: () => new Logger(ProjectsModule.name),
    },
    ProjectsRepositoryService,
    ProjectsService,
  ],
})
export class ProjectsModule {}
