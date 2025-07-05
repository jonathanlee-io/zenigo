import {
  FEATURE_FLAGS_QUEUE,
  FEATURE_FLAGS_SERVICE,
  FeatureFlagsServiceContract,
  TypedClientProxy,
} from '@app/comms';
import {HttpHelpersUtil} from '@app/util';
import {HttpStatus, Inject, Injectable, Logger} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';

@Injectable()
export class FlagsService {
  private readonly flagsClient: TypedClientProxy<
    keyof FeatureFlagsServiceContract,
    FeatureFlagsServiceContract
  >;

  constructor(
    private readonly logger: Logger,
    @Inject(FEATURE_FLAGS_QUEUE)
    readonly untypedFlagsClient: ClientProxy,
  ) {
    this.flagsClient = new TypedClientProxy(untypedFlagsClient);
  }

  async getBatchStatusFeatureFlags({
    clientSubdomain,
    ip: clientIp,
    apiKey,
    userEmail,
  }: {
    clientSubdomain: string;
    ip: string;
    apiKey: string;
    userEmail: string | undefined;
  }) {
    const result = await this.flagsClient.sendAsync(
      FEATURE_FLAGS_SERVICE.GET_ALL_FLAGS,
      {clientSubdomain, clientIp, data: {apiKey, userEmail}},
    );
    return HttpHelpersUtil.returnDataOrThrowError(result);
  }

  async createFeatureFlagProject({
    clientSubdomain,
    requestingUserId,
    requestingUserEmail,
    ip: clientIp,
    projectName,
  }: {
    clientSubdomain: string;
    requestingUserId: string;
    requestingUserEmail: string;
    ip: string;
    projectName: string;
  }) {
    const result = await this.flagsClient.sendAsync(
      FEATURE_FLAGS_SERVICE.CREATE_FEATURE_FLAG_PROJECT,
      {
        clientSubdomain,
        clientIp,
        authenticatedUser: {
          id: requestingUserId,
          email: requestingUserEmail,
        },
        data: {projectName},
      },
    );
    return HttpHelpersUtil.returnDataOrThrowError(result, HttpStatus.CREATED);
  }
}
