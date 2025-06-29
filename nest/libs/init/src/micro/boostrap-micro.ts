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
    queueName: rabbitMqQueueName,
    rabbitMqUrls: process.env.RABBIT_MQ_URLS?.split(',') ?? [],
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
