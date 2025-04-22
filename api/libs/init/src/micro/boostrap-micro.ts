import {DatabaseConfig, DatabaseUrlKeys} from '@app/config';
import {createRabbitMQMicroservice} from '@app/init';
import {HelpersUtil} from '@app/util';

export async function bootstrapMicroservice(
  appModule: unknown,
  rabbitMqUrls: string[],
  rabbitMqQueueName: string,
  migrationUrlPropertyKey: DatabaseUrlKeys,
  schemaOverride: string,
) {
  const app = await createRabbitMQMicroservice(
    appModule,
    rabbitMqUrls,
    rabbitMqQueueName,
  );
  const databaseConfig = app.get<DatabaseConfig>(DatabaseConfig);

  await HelpersUtil.runPrismaMigrations(
    databaseConfig[migrationUrlPropertyKey],
    schemaOverride,
  );

  await app.listen();
}
