import {createHash} from 'crypto';

import {Inject, Injectable, Logger} from '@nestjs/common';
import {DateTime} from 'luxon';

import {PrismaClient as IdentityPrismaClient} from '../../../../../generated/client';
import {IDENTITY_PRISMA} from '../../../../config/db.config';

@Injectable()
export class AnonymousUsersService {
  constructor(
    private readonly logger: Logger,
    @Inject(IDENTITY_PRISMA) private readonly prisma: IdentityPrismaClient,
  ) {}

  async checkIn({
    clientSubdomain,
    apiKey,
    userEmail,
  }: {
    clientSubdomain: string;
    clientIp: string;
    apiKey: string;
    userEmail: string;
  }) {
    const project = await this.prisma.project.findFirst({
      where: {
        subdomains: {
          some: {
            subdomain: clientSubdomain,
          },
        },
      },
    });
    if (!project) {
      this.logger.warn(
        `User with client header: ${userEmail} attempted and failed to check in anonymous user with subdomain: ${clientSubdomain}`,
      );
      return;
    }
    const hashedApiKey = createHash(apiKey)
      .update(apiKey)
      .digest('hex')
      .toString();
    if (hashedApiKey !== project.hashedFeatureFlagApiKey) {
      this.logger.warn(
        `User with client header: ${userEmail} attempted and failed to check in anonymous user with subdomain: ${clientSubdomain} with invalid api key`,
      );
      return;
    }
    await this.prisma.anonymousUser.upsert({
      create: {
        email: userEmail,
        project: {
          connect: {
            id: project.id,
          },
        },
      },
      update: {
        email: userEmail,
        updatedAt: DateTime.now().toJSDate(),
      },
      where: {
        email: userEmail,
      },
    });
    this.logger.log(
      `User with client header: ${userEmail} checked in anonymous user with subdomain: ${clientSubdomain}`,
    );
  }
}
