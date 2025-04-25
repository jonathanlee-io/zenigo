import {feedbackServiceConstants} from '@app/constants';
import {bootstrapMicroservice} from '@app/init';
import {configDotenv} from 'dotenv';

import {FeedbackServiceModule} from './app/feedback-service.module';

configDotenv();

bootstrapMicroservice(
  FeedbackServiceModule,
  [...(process.env.RABBIT_MQ_URLS?.split(',') ?? [])],
  feedbackServiceConstants.queueName,
  'feedbackUrl',
  './apps/feedback-service/prisma/schema.prisma',
).catch((error) => console.error(error));
