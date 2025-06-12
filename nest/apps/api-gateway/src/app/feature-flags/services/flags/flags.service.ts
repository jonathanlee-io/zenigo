import {
  FEATURE_FLAGS_QUEUE,
  FEATURE_FLAGS_SERVICE,
  FeatureFlagsServiceContract,
  TypedClientProxy,
} from '@app/comms';
import {HttpHelpersUtil} from '@app/util';
import {Inject, Injectable, Logger} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';

@Injectable()
export class FlagsService {
  private readonly flagsClient: TypedClientProxy<
    keyof FeatureFlagsServiceContract,
    FeatureFlagsServiceContract
  >;

  constructor(
    private readonly logger: Logger,
    @Inject(FEATURE_FLAGS_QUEUE) readonly untypedFlagsClient: ClientProxy,
  ) {
    this.flagsClient = new TypedClientProxy(untypedFlagsClient);
  }

  async getBatchStatusFeatureFlags({
    clientSubdomain,
    ip: clientIp,
    apiKey,
  }: {
    clientSubdomain: string;
    ip: string;
    apiKey: string;
  }) {
    const result = await this.flagsClient.sendAsync(
      FEATURE_FLAGS_SERVICE.GET_ALL_FLAGS,
      {clientSubdomain, clientIp, data: {apiKey}},
    );
    return HttpHelpersUtil.returnDataOrThrowError(result);
  }
}
