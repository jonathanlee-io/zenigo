import {AuthModule, IsPublic, JwtAuthGuard} from '@app/auth';
import {StripeModule} from '@golevelup/nestjs-stripe';
import {createKeyv} from '@keyv/redis';
import {CacheModule} from '@nestjs/cache-manager';
import {Module} from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {APP_GUARD, RouterModule} from '@nestjs/core';
import {SkipThrottle, ThrottlerGuard, ThrottlerModule} from '@nestjs/throttler';

import {FeatureFlagsModule} from './app/feature-flags/feature-flags.module';
import {FeedbackModule} from './app/feedback/feedback.module';
import {HealthModule} from './app/health/health.module';
import {IdentityModule} from './app/identity/identity.module';
import {PaymentsModule} from './app/payments/payments.module';
import {StripeService} from './app/payments/services/stripe/stripe.service';
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
    StripeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (
        configService: ConfigService<ApiGatewayEnvironment>,
      ) => ({
        apiVersion: '2025-05-28.basil',
        apiKey: configService.getOrThrow<string>('STRIPE_API_KEY'),
        webhookConfig: {
          controllerPrefix: 'payments/stripe',
          decorators: [SkipThrottle(), IsPublic()],
          handlers: [StripeService],
          loggingConfiguration: {
            logMatchingEventHandlers: true,
          },
          requestBodyProperty: 'rawBody',
          stripeSecrets: {
            account: configService.getOrThrow<string>('STRIPE_WEBHOOK_SECRET'),
            accountTest: configService.getOrThrow<string>(
              'STRIPE_WEBHOOK_SECRET',
            ),
          },
        },
      }),
    }),
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
