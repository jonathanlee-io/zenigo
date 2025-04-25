import {ConfigifyModule} from '@jdevel/configify';
import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {EventEmitterModule} from '@nestjs/event-emitter';

import {EmbedScriptsModule} from './embed-scripts/embed-scripts.module';
import {IssuesModule} from './issues/issues.module';
import {ProductsModule} from './products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ConfigifyModule.forRootAsync(),
    EventEmitterModule.forRoot({
      global: true,
    }),
    EmbedScriptsModule,
    IssuesModule,
    ProductsModule,
  ],
})
export class FeedbackServiceModule {}
