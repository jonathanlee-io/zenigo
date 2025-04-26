import {PrismaModule} from '@app/database';
import {Logger, Module} from '@nestjs/common';

import {AuthenticatedUsersController} from './controllers/authenticated-users/authenticated-users.controller';
import {UsersRepositoryService} from './repositories/users-repository/users-repository.service';
import {AuthenticatedUsersService} from './services/authenticated-users/authenticated-users.service';
import {PrismaClient as IdentityPrismaClient} from '../../../generated/client';

@Module({
  imports: [PrismaModule.register({client: IdentityPrismaClient})],
  controllers: [AuthenticatedUsersController],
  providers: [
    {
      provide: Logger,
      useFactory: () => new Logger(UsersModule.name),
    },
    AuthenticatedUsersService,
    UsersRepositoryService,
  ],
  exports: [UsersRepositoryService],
})
export class UsersModule {}
