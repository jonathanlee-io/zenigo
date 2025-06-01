import {LoggingInterceptor} from '@app/util/interceptors/logging/logging.interceptor';
import {
  INestApplication,
  Logger,
  ValidationPipe,
  VersioningType,
} from '@nestjs/common';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';

export const initApp = (app: INestApplication) => {
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      validateCustomDecorators: true,
    }),
  );

  const loggingInterceptorLogger = new Logger(LoggingInterceptor.name);
  app.useGlobalInterceptors(new LoggingInterceptor(loggingInterceptorLogger));

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
    prefix: 'v',
  });

  const swaggerConfig = new DocumentBuilder()
    .setTitle('zenigo')
    .setDescription('zenigo API')
    .setVersion('0.0.1')
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, swaggerDocument, {
    customCssUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css',
    customJs: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.js',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.js',
    ],
  });
};
