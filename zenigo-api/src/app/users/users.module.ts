import {Logger, Module} from '@nestjs/common';

import {AuthenticatedUsersController} from './controllers/authenticated-users/authenticated-users.controller';
import {UsersRepositoryService} from './repositories/users-repository/users-repository.service';
import {AuthenticatedUsersService} from './services/authenticated-users/authenticated-users.service';
import {PrismaModule} from '../../lib/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
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
