import {initApp} from '@app/init';
import {Logger} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import {NestFactory} from '@nestjs/core';
import {FastifyAdapter, NestFastifyApplication} from '@nestjs/platform-fastify';

import {ApiGatewayEnvironment} from '../../../apps/api-gateway/src/config/environment';

export async function bootstrapFastifyApi(
  appModule: unknown,
  port: number,
  requiredConfigKeys: string[],
) {
  const app = await NestFactory.create<NestFastifyApplication>(
    // @ts-expect-error within this monorepo is valid as IEntryNestModule, IEntryNestModule type is not exported from @nestjs/common
    appModule,
    new FastifyAdapter(),
  );

  const configService =
    app.get<ConfigService<ApiGatewayEnvironment>>(ConfigService);

  Logger.log(configService.get('RABBIT_MQ_URLS'));

  requiredConfigKeys.forEach((key) =>
    configService.getOrThrow(key as keyof ApiGatewayEnvironment),
  );

  initApp(app);

  Logger.log(
    `Attempting to listen on :: port ${port} in NODE_ENV: ${configService.getOrThrow('NODE_ENV')}...`,
  );

  await app.listen({host: '::', port}, () => {
    Logger.log(
      `Listening on :: port ${port} in NODE_ENV: ${configService.getOrThrow('NODE_ENV')}...`,
    );
  });
}
