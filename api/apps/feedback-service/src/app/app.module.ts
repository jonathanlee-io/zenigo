import {AuthModule} from '@app/auth';
import {ConfigifyModule} from '@jdevel/configify';
import {CacheModule} from '@nestjs/cache-manager';
import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {EventEmitterModule} from '@nestjs/event-emitter';
import {ThrottlerModule} from '@nestjs/throttler';

import {EmbedScriptsModule} from './embed-scripts/embed-scripts.module';
import {IssuesModule} from './issues/issues.module';
import {ProductsModule} from './products/products.module';
import {ClientsModule} from '../../../identity-service/src/clients/clients.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ConfigifyModule.forRootAsync(),
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
    // UsersModule,
    // ProjectsModule,
    ProductsModule,
    // PaymentsModule,
    EmbedScriptsModule,
  ],
  providers: [],
})
export class AppModule {}
