import {MicroserviceSendResult} from '@app/dto';
import {HttpStatus, Injectable} from '@nestjs/common';

import {FlagsRepository} from '../../repositories/flags/flags.repository';

@Injectable()
export class FlagsService {
  constructor(private readonly flagsRepository: FlagsRepository) {}

  async getAllFlags({
    apiKey,
    userEmail,
  }: {
    apiKey: string;
    userEmail: string | undefined;
  }): Promise<MicroserviceSendResult<unknown>> {
    const {featureFlagsWithOverrides, userSegments} =
      await this.flagsRepository.getAllFlagsWithUserSegmentOverrides({apiKey});
    const mappedFlags = featureFlagsWithOverrides.map((flag) => {
      if (!userEmail || flag.userSegmentOverrides.length === 0) {
        return {
          key: flag.key,
          isEnabled: flag.isEnabledGlobally,
        };
      }

      const userSegmentsWhereUserIsIn = userSegments.filter((userSegment) =>
        userSegment.emails.includes(userEmail),
      );

      if (userSegmentsWhereUserIsIn.length === 0) {
        return {
          key: flag.key,
          isEnabled: flag.isEnabledGlobally,
        };
      }

      const matchingOverride = flag.userSegmentOverrides.find((override) =>
        userSegmentsWhereUserIsIn.some(
          (segment) => segment.userSegmentOverridesId === override.id,
        ),
      );

      return {
        key: flag.key,
        isEnabled: matchingOverride
          ? matchingOverride.isEnabledOverrideValue
          : flag.isEnabledGlobally,
      };
    });
    return {
      status: HttpStatus.OK,
      data: {
        flags: mappedFlags,
      },
    };
  }
}
