import {PrismaModule} from '@app/database';
import {Logger, Module} from '@nestjs/common';

import {ProductsController} from './controllers/products/products.controller';
import {ProductsRepositoryService} from './repositories/products-repository/products-repository.service';
import {ProductsService} from './services/products/products.service';
import {ProjectsModule} from '../../../../identity-service/src/projects/projects.module';
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
  exports: [],
})
export class ProductsModule {}
