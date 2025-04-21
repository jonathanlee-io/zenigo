import {PaymentsModule} from '@app/payments/payments.module';
import {ProjectsModule} from '@app/projects/projects.module';
import {UsersModule} from '@app/users/users.module';
import {Routes} from '@nestjs/core';

import {ClientsModule} from './clients/clients.module';
import {EmbedScriptsModule} from './embed-scripts/embed-scripts.module';
import {IssuesModule} from './issues/issues.module';
import {ProductsModule} from './products/products.module';

export const routes: Routes = [
  {
    path: 'scripts',
    module: EmbedScriptsModule,
  },
  {
    path: 'users',
    module: UsersModule,
  },
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
