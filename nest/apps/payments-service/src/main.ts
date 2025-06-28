import {PAYMENTS_SERVICE_QUEUE} from '@app/comms';
import {bootstrapMicroservice} from '@app/init';
import {configDotenv} from 'dotenv';

import {PaymentsServiceModule} from './app/payments-service.module';
import {dummyPaymentsEnvironment} from './config/environment';

configDotenv({path: '../.env'});

bootstrapMicroservice({
  appModule: PaymentsServiceModule,
  rabbitMqQueueName: PAYMENTS_SERVICE_QUEUE,
  requiredConfigKeys: Object.keys(dummyPaymentsEnvironment),
  databaseUrlKey: 'PAYMENTS_DATABASE_URL',
  schemaOverride:
    process.env.NODE_ENV === 'development'
      ? './apps/payments-service/prisma/schema.prisma'
      : '/dist/apps/payments-service/apps/payments-service/prisma/schema.prisma',
}).catch((error) => console.error(error));
