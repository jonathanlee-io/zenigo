import {createRabbitMQMicroservice} from '@app/init';
import {HelpersUtil} from '@app/util';
import {ConfigService} from '@nestjs/config';

export async function bootstrapMicroservice({
  appModule,
  rabbitMqUrls,
  rabbitMqQueueName,
  requiredConfigKeys,
  databaseUrlKey,
  schemaOverride,
}: {
  appModule: unknown;
  rabbitMqUrls: string[];
  rabbitMqQueueName: string;
  requiredConfigKeys: string[];
  databaseUrlKey: string;
  schemaOverride: string;
}) {
  const app = await createRabbitMQMicroservice(
    appModule,
    rabbitMqUrls,
    rabbitMqQueueName,
  );

  const configService = app.get<ConfigService>(ConfigService);

  requiredConfigKeys.forEach((key) => configService.getOrThrow(key));

  await HelpersUtil.runPrismaMigrations({
    connectionUri: configService.getOrThrow(databaseUrlKey),
    databaseUrlKey,
    schemaOverride,
  });

  await app.listen();
}
