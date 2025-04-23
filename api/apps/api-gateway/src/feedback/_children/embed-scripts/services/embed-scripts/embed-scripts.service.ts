import {feedbackServiceConstants} from '@app/constants';
import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';

@Injectable()
export class EmbedScriptsService {
  constructor(
    @Inject(feedbackServiceConstants.queueName)
    private readonly feedbackClient: ClientProxy,
  ) {}

  async getBootstrapWidgetScript({clientSubdomain}: {clientSubdomain: string}) {
    return this.feedbackClient.send<string, {clientSubdomain: string}>(
      feedbackServiceConstants.messagePatterns.embedScripts.getBootstrapScript,
      {clientSubdomain},
    );
  }

  async getFeedbackWidgetScript() {
    return this.feedbackClient.send<string, unknown>(
      feedbackServiceConstants.messagePatterns.embedScripts.getWidgetScript,
      {},
    );
  }
}
