import {PrismaModule} from '@app/database';
import {ProjectsModule} from '@app/projects/projects.module';
import {Logger, Module} from '@nestjs/common';

import {ProductsController} from './controllers/products/products.controller';
import {ProductsRepositoryService} from './repositories/products-repository/products-repository.service';
import {ProductsService} from './services/products/products.service';
import {PrismaClient as FeedbackPrismaClient} from '../../../generated/client';

@Module({
  imports: [
    PrismaModule.register({client: FeedbackPrismaClient}),
    ProjectsModule,
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
  exports: [ProductsService],
})
export class ProductsModule {}
