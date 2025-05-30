import {MicroserviceSendResult, POSTSuccessDto} from '@app/dto';
import {HttpStatus, Injectable, Logger} from '@nestjs/common';

import {UsersRepositoryService} from '../../repositories/users-repository/users-repository.service';

@Injectable()
export class AuthenticatedUsersService {
  constructor(
    private readonly logger: Logger,
    private readonly usersRepository: UsersRepositoryService,
  ) {}

  async checkIn(
    requestingUserId: string,
    requestingUserEmail: string,
  ): Promise<MicroserviceSendResult<POSTSuccessDto & {isCreatedNew: boolean}>> {
    const existingUser = await this.usersRepository.findBySupabaseIdOrEmail(
      requestingUserId,
      requestingUserEmail,
    );
    if (existingUser) {
      if (
        existingUser.supabaseUserId !== requestingUserId ||
        existingUser.email !== requestingUserEmail
      ) {
        this.usersRepository.updateUserSupabaseIdByEmail(
          requestingUserId,
          requestingUserEmail,
        );
      }
      return {
        status: HttpStatus.OK,
        data: {isSuccessful: true, isCreatedNew: false},
      };
    }
    this.logger.log(
      `Creating new user for (${requestingUserId}) <${requestingUserEmail}>`,
    );
    await this.usersRepository.createUserFromAuthUser(
      requestingUserId,
      requestingUserEmail,
    );
    return {
      status: HttpStatus.OK,
      data: {isSuccessful: true, isCreatedNew: true},
    };
  }
}
