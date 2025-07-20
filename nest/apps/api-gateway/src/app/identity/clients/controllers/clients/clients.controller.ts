import {CurrentUser, CurrentUserDto} from '@app/auth';
import {CreateClientProjectDto} from '@app/dto';
import {Body, Controller, Ip, Post} from '@nestjs/common';

import {CreateClientDto} from '../../../../../../../identity-service/src/app/clients/dto/CreateClient.dto';
import {ClientsService} from '../../services/clients/clients.service';

@Controller()
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  async createClient(
    @CurrentUser()
    {clientSubdomain, requestingUserId, requestingUserEmail}: CurrentUserDto,
    @Ip() ip: string,
    @Body() {clientDisplayName, paymentPlanId}: CreateClientDto,
  ) {
    return this.clientsService.createClient({
      clientSubdomain,
      requestingUserId,
      requestingUserEmail,
      clientIp: ip,
      clientDisplayName,
      paymentPlanId,
    });
  }

  @Post('projects')
  async createProject(
    @CurrentUser()
    {requestingUserId, requestingUserEmail, clientSubdomain}: CurrentUserDto,
    @Ip() ip: string,
    @Body() {clientId, name, subdomain}: CreateClientProjectDto,
  ) {
    return this.clientsService.createClientProject({
      requestingUserId,
      requestingUserEmail,
      clientSubdomain,
      clientIp: ip,
      clientId,
      name,
      subdomain,
    });
  }
}
