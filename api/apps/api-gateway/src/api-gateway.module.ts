import {ConfigifyModule} from '@jdevel/configify';
import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {RouterModule} from '@nestjs/core';

import {appRoutes} from './app.routes';
import {FeedbackModule} from './feedback/feedback.module';

@Module({
  imports: [
    RouterModule.register(appRoutes),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ConfigifyModule.forRootAsync(),
    FeedbackModule,
  ],
  controllers: [],
  providers: [],
})
export class ApiGatewayModule {}
