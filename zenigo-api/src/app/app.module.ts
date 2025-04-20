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
import {EventsModule} from './events/events.module';
import {IssuesModule} from './issues/issues.module';
import {PaymentsModule} from './payments/payments.module';
import {ProductsModule} from './products/products.module';
import {ProjectsModule} from './projects/projects.module';
import {UsersModule} from './users/users.module';
import {AuthModule} from '../lib/auth/auth.module';
import {JwtAuthGuard} from '../lib/auth/guards/jwt-auth/jwt-auth.guard';

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
    EventsModule,
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
