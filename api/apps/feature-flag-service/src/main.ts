import {featureFlagServiceConstants} from '@app/constants';
import {bootstrapMicroservice} from '@app/init';
import {configDotenv} from 'dotenv';

import {FeatureFlagServiceModule} from './app/feature-flag-service.module';

configDotenv();

bootstrapMicroservice({
  appModule: FeatureFlagServiceModule,
  rabbitMqUrls: [...(process.env.RABBIT_MQ_URLS?.split(',') ?? [])],
  rabbitMqQueueName: featureFlagServiceConstants.queueName,
  databaseConfigObjectUrlKey: 'featureFlagUrl',
  databaseUrlKey: 'FEATURE_FLAGS_DATABASE_URL',
  schemaOverride: './apps/feature-flag-service/prisma/schema.prisma',
}).catch((error) => console.error(error));
