import {CreateProjectDto} from '@app/dto/identity/CreateProject.dto';
import {UpdateProjectDto} from '@app/dto/identity/UpdateProject.dto';
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
    requestingUserId: string,
    {
      clientId,
      name,
      subdomain,
      isBugReportsEnabled,
      isFeatureRequestsEnabled,
      isFeatureFeedbackEnabled,
    }: CreateProjectDto,
  ) {
    const user = await this.usersRepository.findBySupabaseId(requestingUserId);
    if (!user) {
      throw new InternalServerErrorException(
        `Could not find user with id: ${requestingUserId}`,
      );
    }
    const [createdProject, createdSubdomain] =
      await this.prismaService.$transaction(async (prisma) => {
        const createdProject = await prisma.project.create({
          data: {
            name,
            isBugReportsEnabled,
            isFeatureRequestsEnabled,
            isFeatureFeedbackEnabled,
            client: {
              connect: {
                id: clientId,
              },
            },
            createdBy: {
              connect: {
                id: user.id,
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

  async getProjectsWhereInvolved(requestingUserId: string) {
    const clientsWhereInvolved = await this.prismaService.client.findMany({
      where: {
        OR: [
          {
            members: {
              some: {
                supabaseUserId: requestingUserId,
              },
            },
          },
          {
            admins: {
              some: {
                supabaseUserId: requestingUserId,
              },
            },
          },
        ],
      },
      include: {
        createdBy: true,
        members: true,
        admins: true,
        projects: true,
      },
    });

    return this.prismaService.project.findMany({
      where: {
        clientId: {in: clientsWhereInvolved.map((client) => client.id)},
      },
      include: {
        createdBy: true,
        client: true,
        hostnames: true,
        subdomains: true,
      },
      orderBy: {
        name: 'asc',
      },
    });
  }

  async findById(projectId: string) {
    return this.prismaService.project.findUnique({
      where: {
        id: projectId,
      },
      include: {
        createdBy: true,
        client: true,
        hostnames: true,
        subdomains: true,
      },
    });
  }

  async updateProjectById(
    projectId: string,
    updateProjectDto: UpdateProjectDto,
  ) {
    return this.prismaService.project.update({
      where: {
        id: projectId,
      },
      data: {
        isBugReportsEnabled: updateProjectDto.isBugReportsEnabled,
        isFeatureRequestsEnabled: updateProjectDto.isFeatureRequestsEnabled,
        isFeatureFeedbackEnabled: updateProjectDto.isFeatureFeedbackEnabled,
        isOwnerUpdatesEnabled: updateProjectDto.isOwnerUpdatesEnabled,
        isOwnerIssuesEnabled: updateProjectDto.isOwnerIssuesEnabled,
        isUserIssuesEnabled: updateProjectDto.isUserIssuesEnabled,
      },
      include: {
        createdBy: true,
        client: true,
        hostnames: true,
        subdomains: true,
      },
    });
  }

  async getProjectsForClient(clientId: string) {
    return this.prismaService.project.findMany({
      where: {
        clientId,
      },
      include: {
        createdBy: true,
        client: true,
        subdomains: true,
        hostnames: true,
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

  async deleteProjectById(projectId: string) {
    return this.prismaService.project.delete({
      where: {
        id: projectId,
      },
    });
  }
}
