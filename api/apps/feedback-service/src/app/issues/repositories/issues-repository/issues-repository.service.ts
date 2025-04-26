import {PRISMA_SERVICE, PrismaService} from '@app/database';
import {Inject, Injectable} from '@nestjs/common';

@Injectable()
export class IssuesRepositoryService {
  constructor(
    @Inject(PRISMA_SERVICE) private readonly prismaService: PrismaService,
  ) {}
}
