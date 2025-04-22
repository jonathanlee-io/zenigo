import {ApplicationConfig, DatabaseConfig, DatabaseUrlKeys} from '@app/config';
import {initApp} from '@app/init';
import {HelpersUtil} from '@app/util';
import {Logger} from '@nestjs/common';
import {NestFactory} from '@nestjs/core';
import {FastifyAdapter, NestFastifyApplication} from '@nestjs/platform-fastify';

export async function bootstrap(
  appModule: unknown,
  port: number,
  migrationUrlPropertyKey: DatabaseUrlKeys,
  schemaOverride: string,
) {
  const app = await NestFactory.create<NestFastifyApplication>(
    // @ts-expect-error within this monorepo is valid as IEntryNestModule, IEntryNestModule type is not exported from @nestjs/common
    appModule,
    new FastifyAdapter(),
  );
  const databaseConfig = app.get<DatabaseConfig>(DatabaseConfig);
  const appConfig = app.get<ApplicationConfig>(ApplicationConfig);

  await HelpersUtil.runPrismaMigrations(
    databaseConfig[migrationUrlPropertyKey],
    schemaOverride,
  );

  initApp(app);

  Logger.log(
    `Attempting to listen on 0.0.0.0 port ${port} in NODE_ENV: ${appConfig.nodeEnv}...`,
  );
  await app.listen(port, () => {
    Logger.log(
      `Listening on 0.0.0.0 port ${port} in NODE_ENV: ${appConfig.nodeEnv}...`,
    );
  });
}
