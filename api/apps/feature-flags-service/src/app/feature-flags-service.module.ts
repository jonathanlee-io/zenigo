import {PrismaModule} from '@app/database';
import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {EventEmitterModule} from '@nestjs/event-emitter';

import {PrismaClient as FeatureFlagPrismaClient} from '../../generated/client';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/feature-flags-service/.env',
    }),
    PrismaModule.register({client: FeatureFlagPrismaClient}),
    EventEmitterModule.forRoot({
      global: true,
    }),
  ],
})
export class FeatureFlagsServiceModule {}
