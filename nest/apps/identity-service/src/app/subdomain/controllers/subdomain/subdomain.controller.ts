import {IDENTITY_SERVICE} from '@app/comms';
import {AuthenticatedMicroserviceControllerPayload} from '@app/dto';
import {Controller} from '@nestjs/common';
import {MessagePattern, Payload} from '@nestjs/microservices';

import {SubdomainService} from '../../services/subdomain/subdomain.service';

@Controller()
export class SubdomainController {
  constructor(private readonly subdomainService: SubdomainService) {}

  @MessagePattern(IDENTITY_SERVICE.GET_SUBDOMAIN_AVAILABILITY)
  async getSubdomainAvailability(
    @Payload()
    {
      data: {subdomain},
    }: AuthenticatedMicroserviceControllerPayload<{subdomain: string}>,
  ) {
    return this.subdomainService.getSubdomainAvailability({subdomain});
  }
}
