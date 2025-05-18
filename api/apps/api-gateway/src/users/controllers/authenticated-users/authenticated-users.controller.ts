import {CurrentUser, CurrentUserDto} from '@app/auth';
import {Controller, HttpCode, HttpStatus, Ip, Post} from '@nestjs/common';
import {ApiTags} from '@nestjs/swagger';

import {AuthenticatedUsersService} from '../../services/authenticated-users/authenticated-users.service';

@ApiTags('Authenticated Users')
@Controller('authenticated')
export class AuthenticatedUsersController {
  constructor(
    private readonly authenticatedUsersService: AuthenticatedUsersService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post('check-in')
  async checkIn(
    @CurrentUser()
    {requestingUserId, requestingUserEmail, clientSubdomain}: CurrentUserDto,
    @Ip() ip: string,
  ) {
    return this.authenticatedUsersService.checkIn(
      {requestingUserId, requestingUserEmail, clientSubdomain},
      ip,
    );
  }
}
