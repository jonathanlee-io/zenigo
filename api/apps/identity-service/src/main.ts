import {identityServiceConstants} from '@app/constants';
import {bootstrapMicroservice} from '@app/init';
import {configDotenv} from 'dotenv';

import {IdentityServiceModule} from './app/identity-service.module';
import {dummyIdentityEnvironment} from './config/environment';

configDotenv();

bootstrapMicroservice({
  appModule: IdentityServiceModule,
  rabbitMqUrls: [...(process.env.RABBIT_MQ_URLS?.split(',') ?? [])],
  rabbitMqQueueName: identityServiceConstants.queueName,
  requiredConfigKeys: Object.keys(dummyIdentityEnvironment),
  databaseUrlKey: 'IDENTITY_DATABASE_URL',
  schemaOverride:
    process.env.NODE_ENV === 'development'
      ? './apps/identity-service/prisma/schema.prisma'
      : '/dist/apps/identity-service/apps/identity-service/prisma/schema.prisma',
}).catch((error) => console.error(error));
