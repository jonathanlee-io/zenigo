import {feedbackServiceConstants} from '@app/constants';
import {RabbitmqModule} from '@app/init';
import {Module} from '@nestjs/common';

import {FeedbackController} from './controllers/feedback/feedback.controller';
import {FeedbackService} from './services/feedback/feedback.service';

@Module({
  imports: [
    RabbitmqModule.register({serviceName: feedbackServiceConstants.queueName}),
  ],
  controllers: [FeedbackController],
  providers: [FeedbackService],
})
export class FeedbackModule {}
