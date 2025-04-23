import {Module} from '@nestjs/common';

import {ClientsModule} from './clients/clients.module';
import {IdentityServiceController} from './identity-service.controller';
import {IdentityServiceService} from './identity-service.service';
import {ProjectsModule} from './projects/projects.module';
import {UsersModule} from './users/users.module';

@Module({
  imports: [ClientsModule, UsersModule, ProjectsModule],
  controllers: [IdentityServiceController],
  providers: [IdentityServiceService],
})
export class IdentityServiceModule {}
