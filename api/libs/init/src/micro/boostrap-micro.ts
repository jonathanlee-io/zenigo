import {createRabbitMQMicroservice} from '@app/init';
import {HelpersUtil} from '@app/util';
import {ConfigService} from '@nestjs/config';

export async function bootstrapMicroservice({
  appModule,
  rabbitMqQueueName,
  requiredConfigKeys,
  databaseUrlKey,
  schemaOverride,
}: {
  appModule: unknown;
  rabbitMqQueueName: string;
  requiredConfigKeys: string[];
  databaseUrlKey: string;
  schemaOverride: string;
}) {
  const app = await createRabbitMQMicroservice({
    module: appModule,
    rabbitMqHost: '127.0.0.1',
    rabbitMqPort: 5673,
    rabbitMqUser: 'guest',
    rabbitMqPassword: 'guest',
    queueName: rabbitMqQueueName,
  });

  const configService = app.get<ConfigService>(ConfigService);

  requiredConfigKeys.forEach((key) => configService.getOrThrow(key));

  await HelpersUtil.runPrismaMigrations({
    connectionUri: configService.getOrThrow(databaseUrlKey),
    databaseUrlKey,
    schemaOverride,
  });

  await app.listen();
}
