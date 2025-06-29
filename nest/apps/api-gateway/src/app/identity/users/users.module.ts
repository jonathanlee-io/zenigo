import {IDENTITY_SERVICE_QUEUE} from '@app/comms';
import {RabbitmqModule} from '@app/init';
import {Logger, Module} from '@nestjs/common';

import {AnonymousUsersController} from './controllers/anonymous-users/anonymous-users.controller';
import {AuthenticatedUsersController} from './controllers/authenticated-users/authenticated-users.controller';
import {AnonymousUsersService} from './services/anonymous-users/anonymous-users.service';
import {AuthenticatedUsersService} from './services/authenticated-users/authenticated-users.service';

@Module({
  imports: [RabbitmqModule.register({serviceName: IDENTITY_SERVICE_QUEUE})],
  controllers: [AuthenticatedUsersController, AnonymousUsersController],
  providers: [
    {
      provide: Logger,
      useFactory: () => new Logger(UsersModule.name),
    },
    AuthenticatedUsersService,
    AnonymousUsersService,
  ],
})
export class UsersModule {}
