import {TypedClientProxy} from '@app/comms';
import {FeedbackServiceContract} from '@app/comms/contracts/feedback-service';
import {feedbackServiceConstants} from '@app/constants';
import {HttpHelpersUtil} from '@app/util';
import {Inject, Injectable, Logger} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';

@Injectable()
export class EmbedScriptsService {
  private readonly feedbackClient: TypedClientProxy<
    keyof FeedbackServiceContract,
    FeedbackServiceContract
  >;

  constructor(
    private readonly logger: Logger,
    @Inject(feedbackServiceConstants.queueName)
    readonly untypedFeedbackClient: ClientProxy,
  ) {
    this.feedbackClient = new TypedClientProxy(untypedFeedbackClient);
  }

  async getBootstrapWidgetScript({clientSubdomain}: {clientSubdomain: string}) {
    const result = await this.feedbackClient.sendAsync('GET_BOOTSTRAP_SCRIPT', {
      clientSubdomain,
    });
    return HttpHelpersUtil.returnDataOrThrowError(result);
  }

  async getFeedbackWidgetScript() {
    const result = await this.feedbackClient.sendAsync(
      'GET_WIDGET_SCRIPT',
      {} as never,
    );
    return HttpHelpersUtil.returnDataOrThrowError(result);
  }
}
