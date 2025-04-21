import {Controller, HttpCode, HttpStatus, Post} from '@nestjs/common';
import {ApiTags} from '@nestjs/swagger';

import {CurrentUser} from '../../../../src/lib/auth/decorators/current-user/current-user.decorator';
import {CurrentUserDto} from '../../../../src/lib/auth/dto/CurrentUserDto';
import {AuthenticatedUsersService} from '../../services/authenticated-users/authenticated-users.service';

@ApiTags('Users')
@Controller('authenticated')
export class AuthenticatedUsersController {
  constructor(
    private readonly authenticatedUsersService: AuthenticatedUsersService,
  ) {}

  @Post('check-in')
  @HttpCode(HttpStatus.OK)
  checkIn(
    @CurrentUser()
    {requestingUserId, requestingUserEmail}: CurrentUserDto,
  ) {
    return this.authenticatedUsersService.checkIn(
      requestingUserId,
      requestingUserEmail,
    );
  }
}
