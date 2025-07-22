import {CreateClientProjectDto} from '@app/dto/identity/CreateClientProjectDto';
import {HelpersUtil} from '@app/util';
import {Inject, Injectable, InternalServerErrorException} from '@nestjs/common';

import {PrismaClient as IdentityPrismaClient} from '../../../../../generated/client';
import {IDENTITY_PRISMA} from '../../../../config/db.config';
import {UsersRepositoryService} from '../../../users/repositories/users-repository/users-repository.service';

@Injectable()
export class ProjectsRepositoryService {
  constructor(
    @Inject(IDENTITY_PRISMA)
    private readonly prismaService: IdentityPrismaClient,
    private readonly usersRepository: UsersRepositoryService,
  ) {}

  async create(
    requestingUserEmail: string,
    {name, subdomain, clientId}: CreateClientProjectDto,
  ) {
    const user = await this.usersRepository.findByEmail(requestingUserEmail);
    if (!user) {
      throw new InternalServerErrorException(
        `Could not find user with e-mail: ${requestingUserEmail}`,
      );
    }
    const [createdProject, createdSubdomain] =
      await this.prismaService.$transaction(async (prisma) => {
        const createdProject = await prisma.project.create({
          data: {
            name,
            hashedFeatureFlagApiKey: HelpersUtil.generateApiKey('ff').hashed,
            isBugReportsEnabled: true,
            isFeatureRequestsEnabled: true,
            isFeatureFeedbackEnabled: true,
            isOwnerIssuesEnabled: false,
            isOwnerUpdatesEnabled: false,
            isUserIssuesEnabled: false,
            createdBy: {
              connect: {
                email: requestingUserEmail,
              },
            },
            client: {
              connect: {
                id: clientId,
              },
            },
          },
          include: {
            createdBy: true,
            client: true,
            subdomains: true,
            hostnames: true,
          },
        });

        const createdSubdomain = await prisma.subdomain.create({
          data: {
            subdomain,
            project: {
              connect: {
                id: createdProject.id,
              },
            },
          },
        });

        return [createdProject, createdSubdomain];
      });
    return {
      ...createdProject,
      subdomains: [createdSubdomain],
    };
  }

  async updateProjectFeatureFlagsApiKeyById({
    projectId,
    hashedKey,
  }: {
    projectId: string;
    hashedKey: string;
  }) {
    return this.prismaService.project.update({
      where: {
        id: projectId,
      },
      data: {
        hashedFeatureFlagApiKey: hashedKey,
      },
    });
  }

  async findBySubdomain(
    clientSubdomain: string,
    overrides?: {isIncludeCreatedBy?: boolean; isIncludeClient?: boolean},
  ) {
    return this.prismaService.project.findMany({
      where: {
        subdomains: {
          some: {
            subdomain: clientSubdomain,
          },
        },
      },
      include: {
        createdBy: overrides?.isIncludeCreatedBy,
        client: overrides?.isIncludeClient,
      },
    });
  }
}
