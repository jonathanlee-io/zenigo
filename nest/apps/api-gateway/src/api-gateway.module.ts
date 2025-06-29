import {AuthModule, JwtAuthGuard} from '@app/auth';
import {createKeyv} from '@keyv/redis';
import {CacheModule} from '@nestjs/cache-manager';
import {Module} from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {APP_GUARD, RouterModule} from '@nestjs/core';
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
