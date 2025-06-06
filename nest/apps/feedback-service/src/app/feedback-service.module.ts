import {createKeyv} from '@keyv/redis';
import {CacheModule} from '@nestjs/cache-manager';
import {Module} from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {EventEmitterModule} from '@nestjs/event-emitter';

import {EmbedScriptsModule} from './embed-scripts/embed-scripts.module';
import {IssuesModule} from './issues/issues.module';
import {ProductsModule} from './products/products.module';
import {FeedbackEnvironment} from '../config/environment';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/feedback-service/.env',
    }),
    EventEmitterModule.forRoot({
      global: true,
    }),
    CacheModule.registerAsync({
      isGlobal: true,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService<FeedbackEnvironment>) => {
        return {
          stores: [createKeyv({url: configService.getOrThrow('REDIS_URL')})],
        };
      },
    }),
    EmbedScriptsModule,
    IssuesModule,
    ProductsModule,
  ],
})
export class FeedbackServiceModule {}
