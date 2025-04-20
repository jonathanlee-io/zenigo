import {Logger, Module} from '@nestjs/common';

import {ProductsController} from './controllers/products/products.controller';
import {ProductsRepositoryService} from './repositories/products-repository/products-repository.service';
import {ProductsService} from './services/products/products.service';
import {PrismaModule} from '../../lib/prisma/prisma.module';
import {ProjectsModule} from '../projects/projects.module';

@Module({
  imports: [PrismaModule, ProjectsModule],
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
