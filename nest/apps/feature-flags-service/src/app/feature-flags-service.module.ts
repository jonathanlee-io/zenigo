import {PrismaModule} from '@app/database';
import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {EventEmitterModule} from '@nestjs/event-emitter';

import {PrismaClient as FeatureFlagPrismaClient} from '../../generated/client';
import {FEATURE_FLAGS_PRISMA} from '../config/db.config';
import {FlagsController} from './controllers/flags/flags.controller';
import {FlagsRepository} from './repositories/flags/flags.repository';
import {FlagsService} from './services/flags/flags.service';

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
  controllers: [FlagsController],
  providers: [FlagsRepository, FlagsService],
})
export class FeatureFlagsServiceModule {}
