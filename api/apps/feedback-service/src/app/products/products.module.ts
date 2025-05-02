import {PrismaModule} from '@app/database';
import {Logger, Module} from '@nestjs/common';

import {ProductsController} from './controllers/products/products.controller';
import {ProductsRepositoryService} from './repositories/products-repository/products-repository.service';
import {ProductsService} from './services/products/products.service';
import {PrismaClient as FeedbackPrismaClient} from '../../../generated/client';
import {FEEDBACK_PRISMA} from '../../config/db.config';

@Module({
  imports: [
    PrismaModule.register(
      {client: FeedbackPrismaClient},
      {injectionKey: FEEDBACK_PRISMA},
    ),
  ],
  controllers: [ProductsController],
  providers: [
    {
      provide: Logger,
      useFactory: () => new Logger(ProductsModule.name),
    },
    ProductsService,
    ProductsRepositoryService,
  ],
  exports: [],
})
export class ProductsModule {}
