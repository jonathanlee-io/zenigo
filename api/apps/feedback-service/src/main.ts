import {bootstrapMicroservice} from '@app/init';
import {configDotenv} from 'dotenv';

import {AppModule} from './app/app.module';

configDotenv();

bootstrapMicroservice(
  AppModule,
  [...(process.env.RABBIT_MQ_URLS?.split(',') ?? [])],
  'FEEDBACK',
  'feedbackUrl',
  './apps/feedback-service/prisma/schema.prisma',
).catch((error) => console.error(error));
