import {IDENTITY_SERVICE_QUEUE} from '@app/comms';
import {RabbitmqModule} from '@app/init';
import {Logger, Module} from '@nestjs/common';

import {ClientsController} from './controllers/clients/clients.controller';
import {ClientsService} from './services/clients/clients.service';

@Module({
  imports: [RabbitmqModule.register({serviceName: IDENTITY_SERVICE_QUEUE})],
  controllers: [ClientsController],
  providers: [
    {provide: Logger, useFactory: () => new Logger(ClientsModule.name)},
    ClientsService,
  ],
})
export class ClientsModule {}
