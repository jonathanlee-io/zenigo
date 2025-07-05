import {IDENTITY_SERVICE} from '@app/comms';
import {AuthenticatedMicroserviceControllerPayload} from '@app/dto';
import {Controller, HttpStatus} from '@nestjs/common';
import {MessagePattern, Payload} from '@nestjs/microservices';
import {ApiTags} from '@nestjs/swagger';

import {ClientsService} from '../../services/clients/clients.service';

@ApiTags('Clients')
@Controller()
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @MessagePattern(IDENTITY_SERVICE.GET_CLIENT_BY_CLIENT_SUBDOMAIN)
  async getClientByClientSubdomain(
    @Payload()
    {
      clientSubdomain,
      authenticatedUser: {email: requestingUserEmail},
    }: AuthenticatedMicroserviceControllerPayload<never>,
  ) {
    const result = await this.clientsService.getClientByClientSubdomain({
      clientSubdomain,
      requestingUserEmail,
    });
    return {
      status: HttpStatus.OK,
      data: result,
    };
  }
}
