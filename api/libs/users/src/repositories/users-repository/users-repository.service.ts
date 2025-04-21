import {Injectable} from '@nestjs/common';

import {PrismaService} from '../../../../src/lib/prisma/services/prisma.service';

@Injectable()
export class UsersRepositoryService {
  constructor(private readonly prismaService: PrismaService) {}

  async findBySupabaseId(supabaseId: string) {
    return this.prismaService.user.findUnique({
      where: {supabaseUserId: supabaseId},
    });
  }

  async findBySupabaseIdOrEmail(supabaseId: string, email: string) {
    return this.prismaService.user.findFirst({
      where: {
        OR: [{supabaseUserId: supabaseId}, {email: email}],
      },
    });
  }

  async createUserFromAuthUser(
    requestingUserId: string,
    requestingUserEmail: string,
  ) {
    return this.prismaService.user.create({
      data: {
        email: requestingUserEmail,
        displayName: requestingUserEmail,
        supabaseUserId: requestingUserId,
      },
    });
  }

  async findByEmail(email: string) {
    return this.prismaService.user.findUnique({
      where: {email},
    });
  }

  updateUserSupabaseIdByEmail(
    requestingUserId: string,
    requestingUserEmail: string,
  ) {
    return this.prismaService.user.updateMany({
      where: {email: requestingUserEmail},
      data: {supabaseUserId: requestingUserId},
    });
  }
}
