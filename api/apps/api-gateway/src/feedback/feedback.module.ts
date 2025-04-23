import {feedbackServiceConstants} from '@app/constants';
import {RabbitmqModule} from '@app/init';
import {Module} from '@nestjs/common';

import {EmbedScriptsModule} from './_children/embed-scripts/embed-scripts.module';
import {IssuesModule} from './_children/issues/issues.module';
import {ProductsModule} from './_children/products/products.module';
import {FeedbackController} from './controllers/feedback/feedback.controller';
import {FeedbackService} from './services/feedback/feedback.service';

@Module({
  imports: [
    RabbitmqModule.register({serviceName: feedbackServiceConstants.queueName}),
    EmbedScriptsModule,
    IssuesModule,
    ProductsModule,
  ],
  controllers: [FeedbackController],
  providers: [FeedbackService],
})
export class FeedbackModule {}
