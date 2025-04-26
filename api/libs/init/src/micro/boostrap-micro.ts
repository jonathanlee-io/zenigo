import {DatabaseConfig, DatabaseUrlKeys} from '@app/config';
import {createRabbitMQMicroservice} from '@app/init';
import {HelpersUtil} from '@app/util';

export async function bootstrapMicroservice({
  appModule,
  rabbitMqUrls,
  rabbitMqQueueName,
  migrationUrlPropertyKey,
  databaseUrlKey,
  schemaOverride,
}: {
  appModule: unknown;
  rabbitMqUrls: string[];
  rabbitMqQueueName: string;
  migrationUrlPropertyKey: DatabaseUrlKeys;
  databaseUrlKey: string;
  schemaOverride: string;
}) {
  const app = await createRabbitMQMicroservice(
    appModule,
    rabbitMqUrls,
    rabbitMqQueueName,
  );
  const databaseConfig = app.get<DatabaseConfig>(DatabaseConfig);

  await HelpersUtil.runPrismaMigrations({
    connectionUri: databaseConfig[migrationUrlPropertyKey],
    databaseUrlKey,
    schemaOverride,
  });

  await app.listen();
}
