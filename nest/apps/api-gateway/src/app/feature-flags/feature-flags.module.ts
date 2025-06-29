import {FEATURE_FLAGS_QUEUE} from '@app/comms';
import {RabbitmqModule} from '@app/init';
import {Logger, Module} from '@nestjs/common';

import {FlagsController} from './controllers/flags/flags.controller';
import {FlagsService} from './services/flags/flags.service';

@Module({
  imports: [RabbitmqModule.register({serviceName: FEATURE_FLAGS_QUEUE})],
  controllers: [FlagsController],
  providers: [
    {provide: Logger, useFactory: () => new Logger(FeatureFlagsModule.name)},
    FlagsService,
  ],
})
export class FeatureFlagsModule {}
