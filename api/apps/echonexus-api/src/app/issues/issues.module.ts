import {PrismaModule} from '@app/database';
import {Module} from '@nestjs/common';

import {IssuesController} from './controllers/issues/issues.controller';
import {IssuesRepositoryService} from './repositories/issues-repository/issues-repository.service';
import {IssuesService} from './services/issues/issues.service';

@Module({
  imports: [PrismaModule],
  controllers: [IssuesController],
  providers: [IssuesRepositoryService, IssuesService],
})
export class IssuesModule {}
