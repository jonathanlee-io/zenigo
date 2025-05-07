import {identityServiceConstants} from '@app/constants';
import {RabbitmqModule} from '@app/init';
import {Logger, Module} from '@nestjs/common';

import {EmbedScriptsController} from './controllers/embed-scripts/embed-scripts.controller';
import {EmbedScriptsService} from './services/embed-scripts/embed-scripts.service';

@Module({
  imports: [
    RabbitmqModule.register({serviceName: identityServiceConstants.queueName}),
  ],
  controllers: [EmbedScriptsController],
  providers: [
    {
      provide: Logger,
      useFactory: () => new Logger(EmbedScriptsModule.name),
    },
    EmbedScriptsService,
  ],
})
export class EmbedScriptsModule {}
