import {AuthModule, JwtAuthGuard} from '@app/auth';
import {FEEDBACK_SERVICE_QUEUE, IDENTITY_SERVICE_QUEUE} from '@app/comms';
import {
  featureFlagServiceConstants,
  paymentsServiceConstants,
} from '@app/constants';
import {Module} from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {APP_GUARD, RouterModule} from '@nestjs/core';
import {ClientsModule, Transport} from '@nestjs/microservices';
import {ThrottlerGuard, ThrottlerModule} from '@nestjs/throttler';

import {appRoutes} from './app.routes';
import {ApiGatewayEnvironment} from './config/environment';
import {FeedbackModule} from './feedback/feedback.module';
import {UsersModule} from './users/users.module';

@Module({
  imports: [
    RouterModule.register(appRoutes),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/nest-gateway/.env',
    }),
    ThrottlerModule.forRoot(),
    ClientsModule.registerAsync([
      {
        name: FEEDBACK_SERVICE_QUEUE,
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService<ApiGatewayEnvironment>) => ({
          transport: Transport.RMQ,
          options: {
            urls: configService.getOrThrow<string>('RABBIT_MQ_URLS').split(','),
            queue: configService.getOrThrow<string>('RABBIT_MQ_FEEDBACK_QUEUE'),
            noAck: true,
            queueOptions: {
              durable: true,
            },
          },
        }),
      },
      {
        name: IDENTITY_SERVICE_QUEUE,
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService<ApiGatewayEnvironment>) => ({
          transport: Transport.RMQ,
          options: {
            urls: configService.getOrThrow<string>('RABBIT_MQ_URLS').split(','),
            queue: configService.getOrThrow<string>('RABBIT_MQ_IDENTITY_QUEUE'),
            noAck: true,
            queueOptions: {
              durable: true,
            },
          },
        }),
      },
      {
        name: featureFlagServiceConstants.queueName,
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService<ApiGatewayEnvironment>) => ({
          transport: Transport.RMQ,
          options: {
            urls: configService.getOrThrow<string>('RABBIT_MQ_URLS').split(','),
            queue: configService.getOrThrow<string>(
              'RABBIT_MQ_FEATURE_FLAGS_QUEUE',
            ),
            noAck: true,
            queueOptions: {
              durable: true,
            },
          },
        }),
      },
      {
        name: paymentsServiceConstants.queueName,
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService<ApiGatewayEnvironment>) => ({
          transport: Transport.RMQ,
          options: {
            urls: configService.getOrThrow<string>('RABBIT_MQ_URLS').split(','),
            queue: configService.getOrThrow<string>('RABBIT_MQ_PAYMENTS_QUEUE'),
            noAck: true,
            queueOptions: {
              durable: true,
            },
          },
        }),
      },
    ]),
    AuthModule,
    FeedbackModule,
    UsersModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class ApiGatewayModule {}
