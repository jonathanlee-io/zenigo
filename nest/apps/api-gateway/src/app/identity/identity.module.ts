import {Module} from '@nestjs/common';

import {SubdomainModule} from './subdomain/subdomain.module';
import {UsersModule} from './users/users.module';

@Module({
  imports: [UsersModule, SubdomainModule],
})
export class IdentityModule {}
