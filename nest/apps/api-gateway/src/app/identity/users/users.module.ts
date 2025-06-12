import {IDENTITY_SERVICE_QUEUE} from '@app/comms';
import {Logger, Module} from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {ClientsModule, Transport} from '@nestjs/microservices';

import {AuthenticatedUsersController} from './controllers/authenticated-users/authenticated-users.controller';
import {AuthenticatedUsersService} from './services/authenticated-users/authenticated-users.service';
import {ApiGatewayEnvironment} from '../../../config/environment';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: IDENTITY_SERVICE_QUEUE,
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService<ApiGatewayEnvironment>) => ({
          transport: Transport.RMQ,
          options: {
            urls: configService.getOrThrow<string>('RABBIT_MQ_URLS').split(','),
            queue: configService.getOrThrow<string>('RABBIT_MQ_IDENTITY_QUEUE'),
            queueOptions: {
              durable: true,
            },
          },
        }),
      },
    ]),
  ],
  controllers: [AuthenticatedUsersController],
  providers: [
    {
      provide: Logger,
      useFactory: () => new Logger(UsersModule.name),
    },
    AuthenticatedUsersService,
  ],
})
export class UsersModule {}
