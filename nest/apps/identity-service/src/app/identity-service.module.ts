import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';

import {ClientsModule} from './clients/clients.module';
import {ProjectsModule} from './projects/projects.module';
import {UsersModule} from './users/users.module';
import { SubdomainModule } from './subdomain/subdomain.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/identity-service/.env',
    }),
    ClientsModule,
    UsersModule,
    ProjectsModule,
    SubdomainModule,
  ],
})
export class IdentityServiceModule {}
