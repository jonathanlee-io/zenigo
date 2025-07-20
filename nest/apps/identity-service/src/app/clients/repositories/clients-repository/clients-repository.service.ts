import {Inject, Injectable, Logger, NotFoundException} from '@nestjs/common';

import {PrismaClient as IdentityPrismaClient} from '../../../../../generated/client';
import {IDENTITY_PRISMA} from '../../../../config/db.config';

@Injectable()
export class ClientsRepositoryService {
  constructor(
    private readonly logger: Logger,
    @Inject(IDENTITY_PRISMA)
    private readonly prismaService: IdentityPrismaClient,
  ) {}

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

  async getClientByClientSubdomain(clientSubdomain: string) {
    const subdomainRecord = await this.prismaService.subdomain.findUnique({
      where: {
        subdomain: clientSubdomain,
      },
    });
    if (!subdomainRecord) {
      throw new NotFoundException();
    }
    const clientRecord = await this.prismaService.client.findMany({
      where: {
        projects: {
          some: {
            id: subdomainRecord.projectId,
          },
        },
      },
      include: {
        admins: true,
        members: true,
        createdBy: true,
        projects: true,
      },
    });
    if (!clientRecord) {
      throw new NotFoundException();
    }
    return clientRecord;
  }

  async create({
    requestingUserEmail,
    clientDisplayName,
    paymentPlanId,
  }: {
    requestingUserEmail: string;
    clientDisplayName: string;
    paymentPlanId: string;
  }) {
    return this.prismaService.client.create({
      data: {
        createdBy: {
          connect: {
            email: requestingUserEmail,
          },
        },
        admins: {
          connect: {
            email: requestingUserEmail,
          },
        },
        members: {
          connect: {
            email: requestingUserEmail,
          },
        },
        displayName: clientDisplayName,
        paymentPlanId: paymentPlanId,
      },
    });
  }
}
