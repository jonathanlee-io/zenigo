import {PrismaModule} from '@app/database';
import {ConfigifyModule} from '@jdevel/configify';
import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {EventEmitterModule} from '@nestjs/event-emitter';

import {PrismaClient as FeatureFlagPrismaClient} from '../../generated/client';

@Module({
  imports: [
    // TODO: Move to individual modules
    PrismaModule.register({client: FeatureFlagPrismaClient}),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ConfigifyModule.forRootAsync({
      configFilePath: './apps/feature-flag-service/.env',
    }),
    EventEmitterModule.forRoot({
      global: true,
    }),
  ],
})
export class FeatureFlagServiceModule {}
