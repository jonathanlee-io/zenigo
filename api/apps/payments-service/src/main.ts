import {feedbackServiceConstants} from '@app/constants';
import {bootstrapMicroservice} from '@app/init';
import {configDotenv} from 'dotenv';

import {PaymentsServiceModule} from './app/payments-service.module';

configDotenv();

bootstrapMicroservice(
  PaymentsServiceModule,
  [...(process.env.RABBIT_MQ_URLS?.split(',') ?? [])],
  feedbackServiceConstants.queueName,
  'feedbackUrl',
  './apps/payments-service/prisma/schema.prisma',
).catch((error) => console.error(error));
