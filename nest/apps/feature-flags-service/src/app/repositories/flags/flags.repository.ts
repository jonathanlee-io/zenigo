import {HelpersUtil} from '@app/util';
import {Inject, Injectable, Logger} from '@nestjs/common';

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
    const newFlag = await this.prismaService.featureFlag.create({
      data: {
        key,
        isEnabledGlobally,
        hashedApiKey: HelpersUtil.hashApiKey(apiKey),
      },
    });
    await this.createUserSegmentOverride({
      flagId: newFlag.id,
      isEnabledOverrideValue: true,
    });
    Logger.log(`Key to look out for: ${newFlag.key}`);
  }

  async createUserSegmentOverride({
    flagId,
    isEnabledOverrideValue,
  }: {
    flagId: string;
    isEnabledOverrideValue: boolean;
  }) {
    await this.prismaService.userSegmentOverrides.create({
      data: {
        isEnabledOverrideValue,
        userSegments: {
          create: {
            emails: ['jonathan.lee.devel@gmail.com'],
          },
        },
        FeatureFlag: {
          connect: {
            id: flagId,
          },
        },
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
