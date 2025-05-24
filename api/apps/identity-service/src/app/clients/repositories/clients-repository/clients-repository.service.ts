import {createHash} from 'crypto';

import {Inject, Injectable, InternalServerErrorException} from '@nestjs/common';
import {v4} from 'uuid';

import {PrismaClient as IdentityPrismaClient} from '../../../../../generated/client';
import {IDENTITY_PRISMA} from '../../../../config/db.config';
import {UsersRepositoryService} from '../../../users/repositories/users-repository/users-repository.service';

@Injectable()
export class ClientsRepositoryService {
  constructor(
    @Inject(IDENTITY_PRISMA)
    private readonly prismaService: IdentityPrismaClient,
    private readonly usersRepository: UsersRepositoryService,
  ) {}

  async registerNewClientWithTransaction(
    requestingUserEmail: string,
    clientDisplayName: string,
    projectDisplayName: string,
    subdomain: string,
    paymentPlanId: string,
    {
      isBugReportsEnabled,
      isFeatureRequestsEnabled,
      isFeatureFeedbackEnabled,
    }: {
      isBugReportsEnabled: boolean;
      isFeatureRequestsEnabled: boolean;
      isFeatureFeedbackEnabled: boolean;
    },
  ) {
    const user = await this.usersRepository.findByEmail(requestingUserEmail);
    if (!user) {
      throw new InternalServerErrorException(
        `Could not find user with e-mail: ${requestingUserEmail}`,
      );
    }
    const [createdClient, createdProject, createdSubdomain] =
      await this.prismaService.$transaction(async (prisma) => {
        const createdClient = await prisma.client.create({
          data: {
            displayName: clientDisplayName,
            paymentPlanId,
            createdBy: {
              connect: {
                id: user.id,
              },
            },
            admins: {
              connect: {
                id: user.id,
              },
            },
            members: {
              connect: {
                id: user.id,
              },
            },
          },
        });
        const createdProject = await prisma.project.create({
          data: {
            name: projectDisplayName,
            isBugReportsEnabled,
            isFeatureRequestsEnabled,
            isFeatureFeedbackEnabled,
            hashedFeatureFlagApiKey: createHash('sha256')
              .update(`ff_${v4().replace(/-/g, '')}`)
              .digest('hex')
              .toString(),
            isOwnerIssuesEnabled: true,
            isOwnerUpdatesEnabled: true,
            isUserIssuesEnabled: false,
            client: {
              connect: {
                id: createdClient.id,
              },
            },
            createdBy: {
              connect: {
                id: user.id,
              },
            },
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

        return [createdClient, createdProject, createdSubdomain];
      });

    return {createdClient, createdSubdomain, createdProject};
  }

  async addSubdomainToProject(subdomain: string, projectId: string) {
    await this.prismaService.subdomain.create({
      data: {
        subdomain,
        project: {
          connect: {
            id: projectId,
          },
        },
      },
    });
  }

  async isExistsSubdomain(subdomain: string) {
    const existingSubdomain = await this.prismaService.subdomain.findUnique({
      where: {subdomain},
    });
    return existingSubdomain !== null && existingSubdomain !== undefined;
  }

  async findClientBySubdomain(subdomain: string) {
    const subdomainRecord = await this.prismaService.subdomain.findUnique({
      where: {subdomain},
      include: {
        project: true,
      },
    });
    if (!subdomainRecord) {
      return null;
    }
    return this.prismaService.client.findUnique({
      where: {
        id: subdomainRecord.project.clientId,
      },
      include: {
        admins: true,
        members: true,
        createdBy: true,
        projects: true,
      },
    });
  }

  async getClientsWhereUserInvolved(
    requestingUserEmail: string,
    {
      isIncludeCreatedBy,
      isIncludeMembers,
      isIncludeAdmins,
      isIncludeProjects,
    }: {
      isIncludeCreatedBy?: boolean;
      isIncludeMembers?: boolean;
      isIncludeAdmins?: boolean;
      isIncludeProjects?: boolean;
    },
  ) {
    return this.prismaService.client.findMany({
      where: {
        OR: [
          {
            members: {
              some: {
                email: requestingUserEmail,
              },
            },
          },
          {
            admins: {
              some: {
                email: requestingUserEmail,
              },
            },
          },
        ],
      },
      include: {
        createdBy: isIncludeCreatedBy,
        members: isIncludeMembers,
        admins: isIncludeAdmins,
        projects: isIncludeProjects,
      },
    });
  }

  async getClientById(
    clientId: string,
    {
      isIncludeCreatedBy,
      isIncludeMembers,
      isIncludeAdmins,
    }: {
      isIncludeCreatedBy?: boolean;
      isIncludeMembers?: boolean;
      isIncludeAdmins?: boolean;
    },
  ) {
    return this.prismaService.client.findUnique({
      where: {id: clientId},
      include: {
        createdBy: isIncludeCreatedBy,
        admins: isIncludeAdmins,
        members: isIncludeMembers,
      },
    });
  }

  async removeMemberFromClientById(clientId: string, emailToRemove: string) {
    return this.prismaService.client.update({
      where: {id: clientId},
      include: {
        admins: true,
        members: true,
        createdBy: true,
      },
      data: {
        members: {
          disconnect: {
            email: emailToRemove,
          },
        },
      },
    });
  }

  async addMemberToClientById(clientId: string, emailToAdd: string) {
    return this.prismaService.client.update({
      where: {id: clientId},
      include: {
        admins: true,
        members: true,
        createdBy: true,
      },
      data: {
        members: {
          connect: {
            email: emailToAdd,
          },
        },
      },
    });
  }

  async addAdminToClientById(clientId: string, emailToAdd: string) {
    return this.prismaService.client.update({
      where: {id: clientId},
      include: {
        admins: true,
        members: true,
        createdBy: true,
      },
      data: {
        admins: {
          connect: {
            email: emailToAdd,
          },
        },
      },
    });
  }
}
