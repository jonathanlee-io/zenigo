import {RabbitmqModule} from '@app/init';
import {ConfigifyModule} from '@jdevel/configify';
import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';

import {ApiGatewayController} from './api-gateway.controller';
import {ApiGatewayService} from './api-gateway.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ConfigifyModule.forRootAsync(),
    RabbitmqModule.register({serviceName: 'FEEDBACK'}),
  ],
  controllers: [ApiGatewayController],
  providers: [ApiGatewayService],
})
export class ApiGatewayModule {}
