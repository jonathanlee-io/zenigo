import {Module} from '@nestjs/common';

import {IdentityServiceController} from './identity-service.controller';
import {IdentityServiceService} from './identity-service.service';
import { ClientsModule } from './clients/clients.module';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [ClientsModule, UsersModule, ProjectsModule],
  controllers: [IdentityServiceController],
  providers: [IdentityServiceService],
})
export class IdentityServiceModule {}
