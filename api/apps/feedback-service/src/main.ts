import {bootstrap} from '@app/init';

import {AppModule} from './app/app.module';

bootstrap(
  AppModule,
  8001,
  'feedbackUrl',
  './apps/feedback-service/prisma/schema.prisma',
).catch((error) => console.error(error));
