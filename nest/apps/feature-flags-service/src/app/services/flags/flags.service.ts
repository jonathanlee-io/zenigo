import {
  IDENTITY_SERVICE,
  IDENTITY_SERVICE_QUEUE,
  IdentityServiceContract,
  TypedClientProxy,
} from '@app/comms';
import {MicroserviceSendResult} from '@app/dto';
import {HttpStatus, Inject, Injectable, Logger} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';

import {FlagsRepository} from '../../repositories/flags/flags.repository';

@Injectable()
export class FlagsService {
  private readonly identityClient: TypedClientProxy<
    keyof IdentityServiceContract,
    IdentityServiceContract
  >;

  constructor(
    private readonly logger: Logger,
    private readonly flagsRepository: FlagsRepository,
    @Inject(IDENTITY_SERVICE_QUEUE) readonly untypedIdentityClient: ClientProxy,
  ) {
    this.identityClient = new TypedClientProxy(untypedIdentityClient);
  }

  async createFeatureFlagProject({
    clientSubdomain,
    clientIp,
    requestingUserId,
    requestingUserEmail,
    projectName,
    clientId,
  }: {
    clientSubdomain: string;
    clientIp: string;
    requestingUserId: string;
    requestingUserEmail: string;
    projectName: string;
    clientId: string;
  }): Promise<MicroserviceSendResult<unknown>> {
    const {status: getClientByIdStatus, data: getClientByIdData} =
      await this.identityClient.sendAsync(
        IDENTITY_SERVICE.GET_CLIENT_BY_CLIENT_ID,
        {
          clientSubdomain,
          clientIp,
          authenticatedUser: {id: requestingUserId, email: requestingUserEmail},
          data: {clientId},
        },
      );
    if (getClientByIdStatus !== HttpStatus.OK) {
      this.logger.error(`Failed to get client by ID ${clientId}`);
      return {
        status: HttpStatus.NOT_FOUND,
        data: null,
      };
    }
    const project = await this.flagsRepository.createFeatureFlagProject({
      projectName,
      clientId: getClientByIdData.id,
    });
    return {
      status: HttpStatus.CREATED,
      data: project,
    };
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
    const createdFlag = await this.flagsRepository.createFlag({
      apiKey,
      key,
      description,
      isEnabledGlobally,
    });
    return {
      status: HttpStatus.CREATED,
      data: createdFlag,
    };
  }

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
