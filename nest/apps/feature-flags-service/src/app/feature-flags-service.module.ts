import {PrismaModule} from '@app/database';
import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {EventEmitterModule} from '@nestjs/event-emitter';

import {PrismaClient as FeatureFlagPrismaClient} from '../../generated/client';
import {FEATURE_FLAGS_PRISMA} from '../config/db.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/feature-flags-service/.env',
    }),
    PrismaModule.register(
      {
        client: FeatureFlagPrismaClient,
      },
      {injectionKey: FEATURE_FLAGS_PRISMA},
    ),
    EventEmitterModule.forRoot({
      global: true,
    }),
  ],
})
export class FeatureFlagsServiceModule {}
