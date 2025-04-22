import {bootstrapMicroservice} from '@app/init';
import {configDotenv} from 'dotenv';

import {AppModule} from './app/app.module';

configDotenv();

bootstrapMicroservice(
  AppModule,
  [...(process.env.RABBIT_MQ_URLS?.split(',') ?? [])],
  process.env.RABBIT_MQ_QUEUE_NAME,
  'featureFlagUrl',
  './apps/feature-flag-service/prisma/schema.prisma',
).catch((error) => console.error(error));
