import { NestFactory } from '@nestjs/core';
import { PaymentsServiceModule } from './payments-service.module';

async function bootstrap() {
  const app = await NestFactory.create(PaymentsServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
