import {Routes} from '@nestjs/core';

import {EmbedScriptsModule} from './feedback/_children/embed-scripts/embed-scripts.module';
import {FeedbackModule} from './feedback/feedback.module';

export const appRoutes: Routes = [
  {
    path: 'feedback',
    module: FeedbackModule,
    children: [
      {
        path: 'embed-scripts',
        module: EmbedScriptsModule,
      },
    ],
  },
];
