import {PrismaModule} from '@app/database';
import {Logger, Module} from '@nestjs/common';

import {PrismaClient as IdentityPrismaClient} from '../../../generated/client';
import {IDENTITY_PRISMA} from '../../config/db.config';
import {ClientsModule} from '../clients/clients.module';
import {UsersModule} from '../users/users.module';

@Module({
  imports: [
    PrismaModule.register(
      {client: IdentityPrismaClient},
      {injectionKey: IDENTITY_PRISMA},
    ),
    ClientsModule,
    UsersModule,
  ],
  providers: [
    {
      provide: Logger,
      useFactory: () => new Logger(ProjectsModule.name),
    },
  ],
})
export class ProjectsModule {}
