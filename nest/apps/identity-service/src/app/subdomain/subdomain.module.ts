import {PrismaModule} from '@app/database';
import {Logger, Module} from '@nestjs/common';

import {SubdomainController} from './controllers/subdomain/subdomain.controller';
import {SubdomainRepository} from './repositories/subdomain/subdomain.repository';
import {SubdomainService} from './services/subdomain/subdomain.service';
import {PrismaClient as IdentityPrismaClient} from '../../../generated/client';
import {IDENTITY_PRISMA} from '../../config/db.config';

@Module({
  imports: [
    PrismaModule.register(
      {client: IdentityPrismaClient},
      {injectionKey: IDENTITY_PRISMA},
    ),
  ],
  controllers: [SubdomainController],
  providers: [
    {provide: Logger, useFactory: () => new Logger(SubdomainModule.name)},
    SubdomainRepository,
    SubdomainService,
  ],
})
export class SubdomainModule {}
