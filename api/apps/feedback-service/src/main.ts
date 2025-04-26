import {feedbackServiceConstants} from '@app/constants';
import {bootstrapMicroservice} from '@app/init';
import {configDotenv} from 'dotenv';

import {FeedbackServiceModule} from './app/feedback-service.module';

configDotenv();

bootstrapMicroservice({
  appModule: FeedbackServiceModule,
  rabbitMqUrls: [...(process.env.RABBIT_MQ_URLS?.split(',') ?? [])],
  rabbitMqQueueName: feedbackServiceConstants.queueName,
  databaseConfigObjectUrlKey: 'feedbackUrl',
  databaseUrlKey: 'FEEDBACK_DATABASE_URL',
  schemaOverride: './apps/feedback-service/prisma/schema.prisma',
}).catch((error) => console.error(error));
