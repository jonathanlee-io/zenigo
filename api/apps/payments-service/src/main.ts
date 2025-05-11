import {paymentsServiceConstants} from '@app/constants';
import {bootstrapMicroservice} from '@app/init';
import {configDotenv} from 'dotenv';

import {PaymentsServiceModule} from './app/payments-service.module';
import {dummyPaymentsEnvironment} from './config/environment';

configDotenv({path: '../.env'});

bootstrapMicroservice({
  appModule: PaymentsServiceModule,
  rabbitMqUrls: [...(process.env.RABBIT_MQ_URLS?.split(',') ?? [])],
  rabbitMqQueueName: paymentsServiceConstants.queueName,
  requiredConfigKeys: Object.keys(dummyPaymentsEnvironment),
  databaseUrlKey: 'PAYMENTS_DATABASE_URL',
  schemaOverride:
    process.env.NODE_ENV === 'development'
      ? './apps/payments-service/prisma/schema.prisma'
      : '/dist/apps/payments-service/apps/payments-service/prisma/schema.prisma',
}).catch((error) => console.error(error));
