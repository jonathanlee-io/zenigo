import {FEATURE_FLAGS_QUEUE} from '@app/comms';
import {Logger, Module} from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {ClientsModule, Transport} from '@nestjs/microservices';

import {FlagsController} from './controllers/flags/flags.controller';
import {FlagsService} from './services/flags/flags.service';
import {ApiGatewayEnvironment} from '../../config/environment';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: FEATURE_FLAGS_QUEUE,
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService<ApiGatewayEnvironment>) => ({
          transport: Transport.RMQ,
          options: {
            urls: configService.getOrThrow<string>('RABBIT_MQ_URLS').split(','),
            queue: configService.getOrThrow<string>(
              'RABBIT_MQ_FEATURE_FLAGS_QUEUE',
            ),
            queueOptions: {
              durable: true,
            },
          },
        }),
      },
    ]),
  ],
  controllers: [FlagsController],
  providers: [
    {provide: Logger, useFactory: () => new Logger(FeatureFlagsModule.name)},
    FlagsService,
  ],
})
export class FeatureFlagsModule {}
