import {Inject, Injectable} from '@nestjs/common';

import {PrismaClient as IdentityPrismaClient} from '../../../../../generated/client';
import {IDENTITY_PRISMA} from '../../../../config/db.config';

@Injectable()
export class SubdomainRepository {
  constructor(
    @Inject(IDENTITY_PRISMA) private readonly prisma: IdentityPrismaClient,
  ) {}

  async getSubdomainAvailability({subdomain}: {subdomain: string}) {
    const subdomainRecord = await this.prisma.subdomain.findFirst({
      where: {subdomain},
    });
    return !!subdomainRecord;
  }
}
