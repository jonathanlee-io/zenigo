import {feedbackServiceConstants} from '@app/constants';
import {bootstrapMicroservice} from '@app/init';
import {configDotenv} from 'dotenv';

import {PaymentsServiceModule} from './app/payments-service.module';

configDotenv();

bootstrapMicroservice({
  appModule: PaymentsServiceModule,
  rabbitMqUrls: [...(process.env.RABBIT_MQ_URLS?.split(',') ?? [])],
  rabbitMqQueueName: feedbackServiceConstants.queueName,
  migrationUrlPropertyKey: 'paymentUrl',
  databaseUrlKey: 'PAYMENTS_DATABASE_URL',
  schemaOverride: './apps/payments-service/prisma/schema.prisma',
}).catch((error) => console.error(error));
