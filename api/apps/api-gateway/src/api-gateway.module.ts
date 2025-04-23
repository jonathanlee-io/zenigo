import {ConfigifyModule} from '@jdevel/configify';
import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';

import {FeedbackModule} from './feedback/feedback.module';

@Module({
  imports: [
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
