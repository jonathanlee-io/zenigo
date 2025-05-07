import {feedbackServiceConstants} from '@app/constants';
import {MicroserviceSendResult} from '@app/dto';
import {
  HttpStatus,
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {firstValueFrom} from 'rxjs';

@Injectable()
export class EmbedScriptsService {
  constructor(
    private readonly logger: Logger,
    @Inject(feedbackServiceConstants.queueName)
    private readonly feedbackClient: ClientProxy,
  ) {}

  async getBootstrapWidgetScript({clientSubdomain}: {clientSubdomain: string}) {
    const result = await firstValueFrom(
      this.feedbackClient.send<
        MicroserviceSendResult<string>,
        {clientSubdomain: string}
      >(
        feedbackServiceConstants.messagePatterns.embedScripts
          .getBootstrapScript,
        {clientSubdomain},
      ),
    );
    if (result.status !== HttpStatus.OK) {
      throw new InternalServerErrorException();
    }
    return result.data;
  }

  async getFeedbackWidgetScript() {
    return this.feedbackClient.send<string, unknown>(
      feedbackServiceConstants.messagePatterns.embedScripts.getWidgetScript,
      {},
    );
  }
}
