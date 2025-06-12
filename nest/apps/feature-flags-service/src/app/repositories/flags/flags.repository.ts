import {Inject, Injectable} from '@nestjs/common';

import {PrismaClient as FeatureFlagsPrismaClient} from '../../../../generated/client';
import {FEATURE_FLAGS_PRISMA} from '../../../config/db.config';

@Injectable()
export class FlagsRepository {
  constructor(
    @Inject(FEATURE_FLAGS_PRISMA)
    private readonly prismaService: FeatureFlagsPrismaClient,
  ) {}

  async getAllFlags() {
    return this.prismaService.featureFlag.findMany({
      include: {
        userSegmentOverrides: true,
      },
    });
  }
}
