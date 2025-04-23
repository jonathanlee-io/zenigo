import {feedbackServiceConstants} from '@app/constants';
import {RabbitmqModule} from '@app/init';
import {Module} from '@nestjs/common';

import {EmbedScriptsController} from './controllers/embed-scripts/embed-scripts.controller';
import {EmbedScriptsService} from './services/embed-scripts/embed-scripts.service';

@Module({
  imports: [
    RabbitmqModule.register({serviceName: feedbackServiceConstants.queueName}),
  ],
  controllers: [EmbedScriptsController],
  providers: [EmbedScriptsService],
})
export class EmbedScriptsModule {}
