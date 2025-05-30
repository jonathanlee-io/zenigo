import {Routes} from '@nestjs/core';

import {EmbedScriptsModule} from './feedback/_children/embed-scripts/embed-scripts.module';
import {IssuesModule} from './feedback/_children/issues/issues.module';
import {ProductsModule} from './feedback/_children/products/products.module';
import {FeedbackModule} from './feedback/feedback.module';
import {UsersModule} from './users/users.module';

export const appRoutes: Routes = [
  {
    path: 'users',
    module: UsersModule,
  },
  {
    path: 'feedback',
    module: FeedbackModule,
    children: [
      {
        path: 'embed-scripts',
        module: EmbedScriptsModule,
      },
      {
        path: 'issues',
        module: IssuesModule,
      },
      {
        path: 'products',
        module: ProductsModule,
      },
    ],
  },
];
