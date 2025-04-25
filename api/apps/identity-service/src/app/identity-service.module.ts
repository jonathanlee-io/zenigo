import {Module} from '@nestjs/common';

import {ClientsModule} from './clients/clients.module';
import {ProjectsModule} from './projects/projects.module';
import {UsersModule} from './users/users.module';

@Module({
  imports: [ClientsModule, UsersModule, ProjectsModule],
  controllers: [],
  providers: [],
})
export class IdentityServiceModule {}
