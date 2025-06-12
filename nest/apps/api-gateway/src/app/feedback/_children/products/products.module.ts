import {FEEDBACK_SERVICE_QUEUE} from '@app/comms';
import {RabbitmqModule} from '@app/init';
import {Module} from '@nestjs/common';

import {ProductsController} from './controllers/products/products.controller';
import {ProductsService} from './services/products/products.service';

@Module({
  imports: [RabbitmqModule.register({serviceName: FEEDBACK_SERVICE_QUEUE})],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
