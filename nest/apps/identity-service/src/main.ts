import {PAYMENTS_SERVICE_QUEUE} from '@app/comms';
import {bootstrapMicroservice} from '@app/init';
import {configDotenv} from 'dotenv';

import {IdentityServiceModule} from './app/identity-service.module';
import {dummyIdentityEnvironment} from './config/environment';

configDotenv({path: '../.env'});

bootstrapMicroservice({
  appModule: IdentityServiceModule,
  rabbitMqQueueName: PAYMENTS_SERVICE_QUEUE,
  requiredConfigKeys: Object.keys(dummyIdentityEnvironment),
  databaseUrlKey: 'IDENTITY_DATABASE_URL',
  schemaOverride:
    process.env.NODE_ENV === 'development'
      ? './apps/identity-service/prisma/schema.prisma'
      : '/dist/apps/identity-service/apps/identity-service/prisma/schema.prisma',
}).catch((error) => console.error(error));
