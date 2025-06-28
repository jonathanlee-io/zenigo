import {AuthModule, JwtAuthGuard} from '@app/auth';
import {FEEDBACK_SERVICE_QUEUE, IDENTITY_SERVICE_QUEUE} from '@app/comms';
import {featureFlagServiceConstants} from '@app/constants';
import {createKeyv} from '@keyv/redis';
import {CacheModule} from '@nestjs/cache-manager';
import {Module} from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {APP_GUARD, RouterModule} from '@nestjs/core';
import {ClientsModule, Transport} from '@nestjs/microservices';
import {ThrottlerGuard, ThrottlerModule} from '@nestjs/throttler';

import {FeatureFlagsModule} from './app/feature-flags/feature-flags.module';
import {FeedbackModule} from './app/feedback/feedback.module';
import {HealthModule} from './app/health/health.module';
import {IdentityModule} from './app/identity/identity.module';
import {PaymentsModule} from './app/payments/payments.module';
import {appRoutes} from './app.routes';
import {ApiGatewayEnvironment} from './config/environment';

@Module({
  imports: [
    RouterModule.register(appRoutes),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/api-gateway/.env',
    }),
    ThrottlerModule.forRoot(),
    CacheModule.registerAsync({
      isGlobal: true,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (
        configService: ConfigService<ApiGatewayEnvironment>,
      ) => {
        return {
          stores: [createKeyv({url: configService.getOrThrow('REDIS_URL')})],
        };
      },
    }),
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
    ]),
    AuthModule,
    HealthModule,
    FeedbackModule,
    IdentityModule,
    FeatureFlagsModule,
    PaymentsModule,
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
