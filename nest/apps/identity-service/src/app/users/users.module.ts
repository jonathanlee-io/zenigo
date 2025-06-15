import {PrismaModule} from '@app/database';
import {Logger, Module} from '@nestjs/common';

import {AnonymousUsersController} from './controllers/anonymous-users/anonymous-users.controller';
import {AuthenticatedUsersController} from './controllers/authenticated-users/authenticated-users.controller';
import {UsersRepositoryService} from './repositories/users-repository/users-repository.service';
import {AuthenticatedUsersService} from './services/authenticated-users/authenticated-users.service';
import {PrismaClient as IdentityPrismaClient} from '../../../generated/client';
import {IDENTITY_PRISMA} from '../../config/db.config';
import {AnonymousUsersService} from './services/anonymous-users/anonymous-users.service';

@Module({
  imports: [
    PrismaModule.register(
      {client: IdentityPrismaClient},
      {injectionKey: IDENTITY_PRISMA},
    ),
  ],
  controllers: [AuthenticatedUsersController, AnonymousUsersController],
  providers: [
    {
      provide: Logger,
      useFactory: () => new Logger(UsersModule.name),
    },
    AuthenticatedUsersService,
    AnonymousUsersService,
    UsersRepositoryService,
  ],
  exports: [UsersRepositoryService],
})
export class UsersModule {}
