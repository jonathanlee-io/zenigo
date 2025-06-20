import {HelpersUtil} from '@app/util';
import {Inject, Injectable} from '@nestjs/common';

import {PrismaClient as FeatureFlagsPrismaClient} from '../../../../generated/client';
import {FEATURE_FLAGS_PRISMA} from '../../../config/db.config';

@Injectable()
export class FlagsRepository {
  constructor(
    @Inject(FEATURE_FLAGS_PRISMA)
    private readonly prismaService: FeatureFlagsPrismaClient,
  ) {}

  async createFlag({
    apiKey,
    key,
    isEnabledGlobally,
  }: {
    apiKey: string;
    key: string;
    isEnabledGlobally: boolean;
  }) {
    return this.prismaService.featureFlag.create({
      data: {
        key,
        isEnabledGlobally,
        hashedApiKey: HelpersUtil.hashApiKey(apiKey),
      },
    });
  }

  async getAllFlagsWithUserSegmentOverrides({apiKey}: {apiKey: string}) {
    return this.prismaService.$transaction(async (prisma) => {
      const featureFlagsWithOverrides = await prisma.featureFlag.findMany({
        include: {
          userSegmentOverrides: true,
        },
        where: {
          hashedApiKey: HelpersUtil.hashApiKey(apiKey),
        },
      });
      const overrideIds = featureFlagsWithOverrides.flatMap((flag) =>
        flag.userSegmentOverrides.map((override) => override.id),
      );
      const userSegments = await prisma.userSegment.findMany({
        where: {
          userSegmentOverridesId: {
            in: overrideIds,
          },
        },
      });
      return {featureFlagsWithOverrides, userSegments};
    });
  }
}
