import {ClientsModule} from '@app/clients';
import {PaymentsModule} from '@app/payments';
import {ProjectsModule} from '@app/projects';
import {Routes} from '@nestjs/core';

import {EmbedScriptsModule} from './embed-scripts/embed-scripts.module';
import {IssuesModule} from './issues/issues.module';
import {ProductsModule} from './products/products.module';

export const routes: Routes = [
  {
    path: 'scripts',
    module: EmbedScriptsModule,
  },
  // {
  //   path: 'users',
  //   module: UsersModule,
  // },
  {
    path: 'clients',
    module: ClientsModule,
  },
  {
    path: 'issues',
    module: IssuesModule,
  },
  {
    path: 'projects',
    module: ProjectsModule,
  },
  {
    path: 'products',
    module: ProductsModule,
  },
  {
    path: 'payments',
    module: PaymentsModule,
  },
];
