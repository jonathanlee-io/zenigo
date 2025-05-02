import {PrismaService} from '@app/database';
import {Inject, Injectable} from '@nestjs/common';

import {FEEDBACK_PRISMA} from '../../../../config/db.config';

@Injectable()
export class IssuesRepositoryService {
  constructor(
    @Inject(FEEDBACK_PRISMA) private readonly prismaService: PrismaService,
  ) {}
}
