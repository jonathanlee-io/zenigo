import {Logger, Module} from '@nestjs/common';

import {SubdomainController} from './controllers/subdomain/subdomain.controller';
import {SubdomainRepository} from './repositories/subdomain/subdomain.repository';

@Module({
  controllers: [SubdomainController],
  providers: [
    {provide: Logger, useFactory: () => new Logger(SubdomainModule.name)},
    SubdomainRepository,
  ],
})
export class SubdomainModule {}
