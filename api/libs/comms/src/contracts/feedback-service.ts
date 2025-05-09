import {Message} from '@app/comms';
import {feedbackServiceConstants} from '@app/constants';
import {MicroserviceSendResult} from '@app/dto';

export interface FeedbackServiceContract {
  [feedbackServiceConstants.messagePatterns.embedScripts
    .getBootstrapScript]: Message<
    {clientSubdomain: string},
    MicroserviceSendResult<string | null>
  >;

  [feedbackServiceConstants.messagePatterns.embedScripts
    .getWidgetScript]: Message<
    {projectId: string},
    MicroserviceSendResult<string | null>
  >;
}
