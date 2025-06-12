import {FEEDBACK_SERVICE_QUEUE} from '@app/comms';
import {Logger, Module} from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {ClientsModule, Transport} from '@nestjs/microservices';

import {EmbedScriptsController} from './controllers/embed-scripts/embed-scripts.controller';
import {EmbedScriptsService} from './services/embed-scripts/embed-scripts.service';
import {ApiGatewayEnvironment} from '../../../../config/environment';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: FEEDBACK_SERVICE_QUEUE,
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService<ApiGatewayEnvironment>) => ({
          transport: Transport.RMQ,
          options: {
            urls: configService.getOrThrow<string>('RABBIT_MQ_URLS').split(','),
            queue: configService.getOrThrow<string>('RABBIT_MQ_FEEDBACK_QUEUE'),
            queueOptions: {
              durable: true,
            },
          },
        }),
      },
    ]),
  ],
  controllers: [EmbedScriptsController],
  providers: [
    {
      provide: Logger,
      useFactory: () => new Logger(EmbedScriptsModule.name),
    },
    EmbedScriptsService,
  ],
})
export class EmbedScriptsModule {}
