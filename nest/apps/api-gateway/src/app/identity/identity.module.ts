import {Module} from '@nestjs/common';

import {ClientsModule} from './clients/clients.module';
import {SubdomainModule} from './subdomain/subdomain.module';
import {UsersModule} from './users/users.module';

@Module({
  imports: [UsersModule, SubdomainModule, ClientsModule],
})
export class IdentityModule {}
