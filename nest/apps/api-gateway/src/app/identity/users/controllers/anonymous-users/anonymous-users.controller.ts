import {CurrentUser, CurrentUserDto} from '@app/auth';
import {UseFlagApiKeyWithUserEmail} from '@app/auth/decorators/api-key-with-user-email/api-key-with-user-email.decorator';
import {
  Controller,
  Headers,
  HttpCode,
  HttpStatus,
  Ip,
  Post,
} from '@nestjs/common';
import {ApiHeader, ApiTags} from '@nestjs/swagger';

import {AnonymousUsersService} from '../../services/anonymous-users/anonymous-users.service';

@ApiTags('Anonymous Users')
@Controller('anonymous')
export class AnonymousUsersController {
  constructor(private readonly anonymousUsersService: AnonymousUsersService) {}

  @ApiHeader({
    name: 'X-Api-Key',
    required: true,
    description:
      'The API key of the client/environment for which the user is requesting the flags',
  })
  @ApiHeader({
    name: 'X-User-Email',
    required: true,
    description: 'The email of the user requesting the flags',
  })
  @UseFlagApiKeyWithUserEmail()
  @HttpCode(HttpStatus.OK)
  @Post('check-in')
  async checkIn(
    @CurrentUser() {clientSubdomain}: CurrentUserDto,
    @Ip() ip: string,
    @Headers('X-Api-Key') apiKey: string,
    @Headers('X-User-Email') userEmail: string,
  ) {
    await this.anonymousUsersService.checkIn(
      {clientSubdomain, ip},
      {apiKey, userEmail},
    );
  }
}
