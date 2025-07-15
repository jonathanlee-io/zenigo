import {IDENTITY_SERVICE_QUEUE} from '@app/comms';
import {RabbitmqModule} from '@app/init';
import {Logger, Module} from '@nestjs/common';

import {SubdomainController} from './controllers/subdomain/subdomain.controller';
import {SubdomainService} from './services/subdomain/subdomain.service';

@Module({
  imports: [RabbitmqModule.register({serviceName: IDENTITY_SERVICE_QUEUE})],
  controllers: [SubdomainController],
  providers: [
    {provide: Logger, useFactory: () => new Logger(SubdomainModule.name)},
    SubdomainService,
  ],
})
export class SubdomainModule {}
