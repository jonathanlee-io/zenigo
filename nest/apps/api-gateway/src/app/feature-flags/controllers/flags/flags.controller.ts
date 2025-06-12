import {CurrentUser, CurrentUserDto, UseFlagApiKey} from '@app/auth';
import {Controller, Get, Headers, Ip} from '@nestjs/common';

import {FlagsService} from '../../services/flags/flags.service';

@Controller()
export class FlagsController {
  constructor(private readonly flagsService: FlagsService) {}

  @UseFlagApiKey()
  @Get('status/batch')
  async getBatchStatusFeatureFlags(
    @CurrentUser() {clientSubdomain}: CurrentUserDto,
    @Ip() ip: string,
    @Headers('X-API-KEY') apiKey: string,
  ) {
    return this.flagsService.getBatchStatusFeatureFlags({
      clientSubdomain,
      ip,
      apiKey,
    });
  }
}
