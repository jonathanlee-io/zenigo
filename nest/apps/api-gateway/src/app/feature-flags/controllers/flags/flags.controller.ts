import {CurrentUser, CurrentUserDto, UseFlagApiKey} from '@app/auth';
import {Controller, Get, Headers, Ip} from '@nestjs/common';
import {ApiHeader} from '@nestjs/swagger';

import {FlagsService} from '../../services/flags/flags.service';

@Controller()
export class FlagsController {
  constructor(private readonly flagsService: FlagsService) {}

  @ApiHeader({
    name: 'X-USER-EMAIL',
    required: false,
    description: 'The email of the user requesting the flags',
  })
  @UseFlagApiKey()
  @Get()
  async getBatchStatusFeatureFlags(
    @CurrentUser() {clientSubdomain}: CurrentUserDto,
    @Ip() ip: string,
    @Headers('X-API-KEY') apiKey: string,
    @Headers('X-USER-EMAIL') userEmail: string | undefined,
  ) {
    return this.flagsService.getBatchStatusFeatureFlags({
      clientSubdomain,
      ip,
      apiKey,
      userEmail,
    });
  }
}
