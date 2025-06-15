import {CurrentUser, CurrentUserDto, UseFlagApiKey} from '@app/auth';
import {Controller, Get, Headers, Ip} from '@nestjs/common';
import {ApiHeader} from '@nestjs/swagger';

import {FlagsService} from '../../services/flags/flags.service';

@Controller()
export class FlagsController {
  constructor(private readonly flagsService: FlagsService) {}

  @ApiHeader({
    name: 'X-Api-Key',
    required: true,
    description:
      'The API key of the client/environment for which the user is requesting the flags',
  })
  @ApiHeader({
    name: 'X-User-Email',
    required: false,
    description: 'The email of the user requesting the flags',
  })
  @UseFlagApiKey()
  @Get()
  async getBatchStatusFeatureFlags(
    @CurrentUser() {clientSubdomain}: CurrentUserDto,
    @Ip() ip: string,
    @Headers('X-Api-Key') apiKey: string,
    @Headers('X-User-Email') userEmail: string | undefined,
  ) {
    return this.flagsService.getBatchStatusFeatureFlags({
      clientSubdomain,
      ip,
      apiKey,
      userEmail,
    });
  }
}
