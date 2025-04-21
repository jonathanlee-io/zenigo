import {AuthModule, JwtAuthGuard} from '@app/auth';
import {PaymentsModule} from '@app/payments';
import {ProjectsModule} from '@app/projects';
import {UsersModule} from '@app/users';
import {ConfigifyModule} from '@jdevel/configify';
import {CacheModule} from '@nestjs/cache-manager';
import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {APP_GUARD, RouterModule} from '@nestjs/core';
import {EventEmitterModule} from '@nestjs/event-emitter';
import {ThrottlerGuard, ThrottlerModule} from '@nestjs/throttler';

import {routes} from './app.routes';
import {ClientsModule} from './clients/clients.module';
import {EmbedScriptsModule} from './embed-scripts/embed-scripts.module';
import {IssuesModule} from './issues/issues.module';
import {ProductsModule} from './products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ConfigifyModule.forRootAsync(),
    RouterModule.register(routes),
    EventEmitterModule.forRoot({
      global: true,
    }),
    ThrottlerModule.forRoot([
      {
        ttl: 5_000,
        limit: 10,
      },
    ]),
    CacheModule.register({
      isGlobal: true,
    }),
    AuthModule,
    IssuesModule,
    ClientsModule,
    UsersModule,
    ProjectsModule,
    ProductsModule,
    PaymentsModule,
    EmbedScriptsModule,
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
export class AppModule {}
