import {featureFlagServiceConstants} from '@app/constants';
import {bootstrapMicroservice} from '@app/init';
import {configDotenv} from 'dotenv';

import {AppModule} from './app/app.module';

configDotenv();

bootstrapMicroservice(
  AppModule,
  [...(process.env.RABBIT_MQ_URLS?.split(',') ?? [])],
  featureFlagServiceConstants.queueName,
  'featureFlagUrl',
  './apps/feature-flag-service/prisma/schema.prisma',
).catch((error) => console.error(error));
