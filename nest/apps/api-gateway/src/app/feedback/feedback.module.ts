import {FEEDBACK_SERVICE_QUEUE} from '@app/comms';
import {Module} from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {ClientsModule, Transport} from '@nestjs/microservices';

import {ApiGatewayEnvironment} from '../../config/environment';
import {EmbedScriptsModule} from './_children/embed-scripts/embed-scripts.module';
import {IssuesModule} from './_children/issues/issues.module';
import {ProductsModule} from './_children/products/products.module';
import {FeedbackController} from './controllers/feedback/feedback.controller';
import {FeedbackService} from './services/feedback/feedback.service';

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
    EmbedScriptsModule,
    IssuesModule,
    ProductsModule,
  ],
  controllers: [FeedbackController],
  providers: [FeedbackService],
})
export class FeedbackModule {}
