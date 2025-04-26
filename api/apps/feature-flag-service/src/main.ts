import {featureFlagServiceConstants} from '@app/constants';
import {bootstrapMicroservice} from '@app/init';
import {configDotenv} from 'dotenv';

import {FeatureFlagServiceModule} from './app/feature-flag-service.module';

configDotenv();

bootstrapMicroservice(
  FeatureFlagServiceModule,
  [...(process.env.RABBIT_MQ_URLS?.split(',') ?? [])],
  featureFlagServiceConstants.queueName,
  'featureFlagUrl',
  './apps/feature-flag-service/prisma/schema.prisma',
).catch((error) => console.error(error));
