import {CurrentUser, CurrentUserDto} from '@app/auth';
import {SubdomainParamDto} from '@app/dto';
import {Controller, Get, Ip, Param} from '@nestjs/common';

import {SubdomainService} from '../../services/subdomain/subdomain.service';

@Controller()
export class SubdomainController {
  constructor(private readonly subdomainService: SubdomainService) {}

  @Get('availability/:subdomain')
  async getSubdomainAvailability(
    @CurrentUser()
    {requestingUserId, requestingUserEmail, clientSubdomain}: CurrentUserDto,
    @Ip() ip: string,
    @Param() {subdomain}: SubdomainParamDto,
  ) {
    return this.subdomainService.getSubdomainAvailability({
      requestingUserId,
      requestingUserEmail,
      clientSubdomain,
      ip,
      subdomain,
    });
  }
}
