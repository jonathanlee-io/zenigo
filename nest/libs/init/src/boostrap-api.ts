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
    appModule as any,
    new FastifyAdapter(),
    {
      rawBody: true,
    },
  );

  await app.register(await import('fastify-raw-body'), {
    field: 'rawBody',
    global: false,
    encoding: 'utf-8',
    runFirst: true,
    routes: ['/payments/stripe/webhook'],
  });

  const configService =
    app.get<ConfigService<ApiGatewayEnvironment>>(ConfigService);

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
