import {
  FEEDBACK_SERVICE,
  FEEDBACK_SERVICE_QUEUE,
  TypedClientProxy,
} from '@app/comms';
import {FeedbackServiceContract} from '@app/comms/contracts/feedback-service';
import {HttpHelpersUtil} from '@app/util';
import {CACHE_MANAGER} from '@nestjs/cache-manager';
import {HttpStatus, Inject, Injectable, Logger} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {Cache} from 'cache-manager';

@Injectable()
export class EmbedScriptsService {
  private readonly feedbackClient: TypedClientProxy<
    keyof FeedbackServiceContract,
    FeedbackServiceContract
  >;

  constructor(
    private readonly logger: Logger,
    @Inject(FEEDBACK_SERVICE_QUEUE)
    readonly untypedFeedbackClient: ClientProxy,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) {
    this.feedbackClient = new TypedClientProxy(untypedFeedbackClient);
  }

  async getBootstrapWidgetScript({
    clientSubdomain,
    ip,
  }: {
    clientSubdomain: string;
    ip: string;
  }) {
    const result = await this.feedbackClient.sendAsync(
      FEEDBACK_SERVICE.GET_BOOTSTRAP_SCRIPT,
      {
        clientSubdomain,
        clientIp: ip,
        data: null as never,
      },
    );
    return HttpHelpersUtil.returnDataOrThrowError(
      result,
      HttpStatus.OK,
      result?.errorMessage,
      result.status,
    );
  }

  async getFeedbackWidgetScript({
    clientSubdomain,
    ip,
  }: {
    clientSubdomain: string;
    ip: string;
  }) {
    const result = await this.feedbackClient.sendAsync(
      FEEDBACK_SERVICE.GET_WIDGET_SCRIPT,
      {clientSubdomain, clientIp: ip, data: null as never},
    );
    return HttpHelpersUtil.returnDataOrThrowError(result);
  }
}
