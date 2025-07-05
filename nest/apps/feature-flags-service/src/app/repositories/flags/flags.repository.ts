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

  async createFeatureFlagProject({
    clientId,
    projectName,
  }: {
    clientId: string;
    projectName: string;
  }) {
    return this.prismaService.featureFlagProject.create({
      data: {
        clientId,
        name: projectName,
        environments: {
          createMany: {
            data: [
              {
                apiKey: HelpersUtil.generateApiKey('ff').raw,
                name: 'Development',
              },
              {
                apiKey: HelpersUtil.generateApiKey('ff').raw,
                name: 'Production',
              },
            ],
          },
        },
      },
      include: {
        environments: true,
      },
    });
  }

  async createFlag({
    apiKey,
    key,
    description,
    isEnabledGlobally,
  }: {
    apiKey: string;
    key: string;
    description: string;
    isEnabledGlobally: boolean;
  }) {
    return this.prismaService.featureFlag.create({
      data: {
        key,
        description,
        isEnabledGlobally,
        apiKey,
      },
    });
  }

  async createUserSegmentOverride({
    flagId,
    isEnabledOverrideValue,
    emails,
  }: {
    flagId: string;
    isEnabledOverrideValue: boolean;
    emails: string[];
  }) {
    await this.prismaService.userSegmentOverrides.create({
      data: {
        isEnabledOverrideValue,
        userSegments: {
          create: {
            emails,
          },
        },
        featureFlag: {
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
          apiKey,
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
