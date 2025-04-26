import {identityServiceConstants} from '@app/constants';
import {bootstrapMicroservice} from '@app/init';
import {configDotenv} from 'dotenv';

import {IdentityServiceModule} from './app/identity-service.module';

configDotenv();

bootstrapMicroservice(
  IdentityServiceModule,
  [...(process.env.RABBIT_MQ_URLS?.split(',') ?? [])],
  identityServiceConstants.queueName,
  'identityUrl',
  'IDENTITY_DATABASE_URL',
  './apps/identity-service/prisma/schema.prisma',
).catch((error) => console.error(error));
