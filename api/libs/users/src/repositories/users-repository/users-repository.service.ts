import {PRISMA_SERVICE, PrismaService} from '@app/database';
import {Inject, Injectable} from '@nestjs/common';

@Injectable()
export class UsersRepositoryService {
  constructor(@Inject(PRISMA_SERVICE) private readonly prisma: PrismaService) {}

  async findBySupabaseId(supabaseId: string) {
    return this.prisma.user.findUnique({
      where: {supabaseUserId: supabaseId},
    });
  }

  async findBySupabaseIdOrEmail(supabaseId: string, email: string) {
    return this.prisma.user.findFirst({
      where: {
        OR: [{supabaseUserId: supabaseId}, {email: email}],
      },
    });
  }

  async createUserFromAuthUser(
    requestingUserId: string,
    requestingUserEmail: string,
  ) {
    return this.prisma.user.create({
      data: {
        email: requestingUserEmail,
        displayName: requestingUserEmail,
        supabaseUserId: requestingUserId,
      },
    });
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {email},
    });
  }

  updateUserSupabaseIdByEmail(
    requestingUserId: string,
    requestingUserEmail: string,
  ) {
    return this.prisma.user.updateMany({
      where: {email: requestingUserEmail},
      data: {supabaseUserId: requestingUserId},
    });
  }
}
