import {DatabaseConfig, DatabaseUrlKeys} from '@app/config';
import {createRabbitMQMicroservice} from '@app/init';
import {HelpersUtil} from '@app/util';

export async function bootstrapMicroservice({
  appModule,
  rabbitMqUrls,
  rabbitMqQueueName,
  databaseConfigObjectUrlKey,
  databaseUrlKey,
  schemaOverride,
}: {
  appModule: unknown;
  rabbitMqUrls: string[];
  rabbitMqQueueName: string;
  databaseConfigObjectUrlKey: DatabaseUrlKeys;
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
    connectionUri: databaseConfig[databaseConfigObjectUrlKey],
    databaseUrlKey,
    schemaOverride,
  });

  await app.listen();
}
