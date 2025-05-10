import {FEEDBACK_SERVICE_QUEUE} from '@app/comms';
import {bootstrapMicroservice} from '@app/init';
import {configDotenv} from 'dotenv';

import {FeedbackServiceModule} from './app/feedback-service.module';
import {dummyFeedbackEnvironment} from './config/environment';

configDotenv();

bootstrapMicroservice({
  appModule: FeedbackServiceModule,
  rabbitMqUrls: [...(process.env.RABBIT_MQ_URLS?.split(',') ?? [])],
  rabbitMqQueueName: FEEDBACK_SERVICE_QUEUE,
  requiredConfigKeys: Object.keys(dummyFeedbackEnvironment),
  databaseUrlKey: 'FEEDBACK_DATABASE_URL',
  schemaOverride:
    process.env.NODE_ENV === 'development'
      ? './apps/feedback-service/prisma/schema.prisma'
      : '/dist/apps/feedback-service/apps/feedback-service/prisma/schema.prisma',
}).catch((error) => console.error(error));
