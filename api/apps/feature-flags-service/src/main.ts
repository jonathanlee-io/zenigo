import {featureFlagServiceConstants} from '@app/constants';
import {bootstrapMicroservice} from '@app/init';
import {configDotenv} from 'dotenv';

import {FeatureFlagsServiceModule} from './app/feature-flags-service.module';

configDotenv();

bootstrapMicroservice({
  appModule: FeatureFlagsServiceModule,
  rabbitMqUrls: [...(process.env.RABBIT_MQ_URLS?.split(',') ?? [])],
  rabbitMqQueueName: featureFlagServiceConstants.queueName,
  databaseConfigObjectUrlKey: 'featureFlagUrl',
  databaseUrlKey: 'FEATURE_FLAGS_DATABASE_URL',
  schemaOverride: './apps/feature-flags-service/prisma/schema.prisma',
}).catch((error) => console.error(error));
