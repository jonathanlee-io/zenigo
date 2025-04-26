import {identityServiceConstants} from '@app/constants';
import {bootstrapMicroservice} from '@app/init';
import {configDotenv} from 'dotenv';

import {IdentityServiceModule} from './app/identity-service.module';

configDotenv();

bootstrapMicroservice({
  appModule: IdentityServiceModule,
  rabbitMqUrls: [...(process.env.RABBIT_MQ_URLS?.split(',') ?? [])],
  rabbitMqQueueName: identityServiceConstants.queueName,
  databaseConfigObjectUrlKey: 'identityUrl',
  databaseUrlKey: 'IDENTITY_DATABASE_URL',
  schemaOverride: './apps/identity-service/prisma/schema.prisma',
}).catch((error) => console.error(error));
