import {Routes} from '@nestjs/core';

import {FeatureFlagsModule} from './app/feature-flags/feature-flags.module';
import {EmbedScriptsModule} from './app/feedback/_children/embed-scripts/embed-scripts.module';
import {IssuesModule} from './app/feedback/_children/issues/issues.module';
import {ProductsModule} from './app/feedback/_children/products/products.module';
import {FeedbackModule} from './app/feedback/feedback.module';
import {IdentityModule} from './app/identity/identity.module';
import {PaymentsModule} from './app/payments/payments.module';

export const appRoutes: Routes = [
  {
    path: 'flags',
    module: FeatureFlagsModule,
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
  {
    path: 'identity',
    module: IdentityModule,
  },
  {
    path: 'payments',
    module: PaymentsModule,
  },
];
