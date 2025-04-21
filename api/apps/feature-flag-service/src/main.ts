import {bootstrap} from '@app/init';

import {AppModule} from './app/app.module';

bootstrap(
  AppModule,
  8000,
  'featureFlagUrl',
  './apps/feature-flag-service/prisma/schema.prisma',
).catch((error) => console.error(error));
