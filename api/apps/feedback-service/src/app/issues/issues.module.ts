import {PrismaModule} from '@app/database';
import {Module} from '@nestjs/common';

import {IssuesController} from './controllers/issues/issues.controller';
import {IssuesRepositoryService} from './repositories/issues-repository/issues-repository.service';
import {IssuesService} from './services/issues/issues.service';
import {PrismaClient as FeedbackPrismaClient} from '../../../generated/client';
import {FEEDBACK_PRISMA} from '../../config/db.config';

@Module({
  imports: [
    PrismaModule.register(
      {client: FeedbackPrismaClient},
      {injectionKey: FEEDBACK_PRISMA},
    ),
  ],
  controllers: [IssuesController],
  providers: [IssuesRepositoryService, IssuesService],
})
export class IssuesModule {}
