import {featureFlagServiceConstants} from '@app/constants';
import {bootstrapMicroservice} from '@app/init';
import {configDotenv} from 'dotenv';

import {FeatureFlagsServiceModule} from './app/feature-flags-service.module';
import {dummyFeatureFlagsEnvironment} from './config/environment';

configDotenv({path: '../.env'});

bootstrapMicroservice({
  appModule: FeatureFlagsServiceModule,
  rabbitMqUrls: [...(process.env.RABBIT_MQ_URLS?.split(',') ?? [])],
  rabbitMqQueueName: featureFlagServiceConstants.queueName,
  requiredConfigKeys: Object.keys(dummyFeatureFlagsEnvironment),
  databaseUrlKey: 'FEATURE_FLAGS_DATABASE_URL',
  schemaOverride:
    process.env.NODE_ENV === 'development'
      ? './apps/feature-flags-service/prisma/schema.prisma'
      : '/dist/apps/feature-flags-service/apps/feature-flags-service/prisma/schema.prisma',
}).catch((error) => console.error(error));
