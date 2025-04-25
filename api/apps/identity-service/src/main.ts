import {feedbackServiceConstants} from '@app/constants';
import {bootstrapMicroservice} from '@app/init';
import {configDotenv} from 'dotenv';

import {IdentityServiceModule} from './app/identity-service.module';

configDotenv();

bootstrapMicroservice(
  IdentityServiceModule,
  [...(process.env.RABBIT_MQ_URLS?.split(',') ?? [])],
  feedbackServiceConstants.queueName,
  'feedbackUrl',
  './apps/identity-service/prisma/schema.prisma',
).catch((error) => console.error(error));
