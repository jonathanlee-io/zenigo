import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {ApiTags} from '@nestjs/swagger';

import {CurrentUser} from '../../../../lib/auth/decorators/current-user/current-user.decorator';
import {CurrentUserDto} from '../../../../lib/auth/dto/CurrentUserDto';
import {IdParamDto} from '../../../../lib/validation/id.param.dto';
import {CreateClientDto} from '../../dto/CreateClient.dto';
import {IsSubdomainAvailableDto} from '../../dto/IsSubdomainAvailable.dto';
import {ClientsService} from '../../services/clients/clients.service';

@ApiTags('Clients')
@Controller()
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post('create')
  async registerNewClient(
    @CurrentUser() {requestingUserEmail}: CurrentUserDto,
    @Body() createClientDto: CreateClientDto,
  ) {
    return this.clientsService.createClient(
      requestingUserEmail,
      createClientDto,
    );
  }

  @Post('is-subdomain-available')
  @HttpCode(HttpStatus.OK)
  async isSubdomainAvailable(
    @Body() isSubdomainAvailableDto: IsSubdomainAvailableDto,
  ) {
    return this.clientsService.checkIfSubdomainAvailable(
      isSubdomainAvailableDto,
    );
  }

  @Get('where-involved')
  async getClientsWhereInvolved(
    @CurrentUser() {requestingUserEmail}: CurrentUserDto,
  ) {
    return this.clientsService.getClientsWhereInvolved(requestingUserEmail);
  }

  @Get(':id')
  async getClientById(
    @CurrentUser() {requestingUserId}: CurrentUserDto,
    @Param() {id: clientId}: IdParamDto,
  ) {
    return this.clientsService.getClientById(requestingUserId, clientId);
  }

  @Patch(':id/remove-member')
  async removeMemberFromClientById(
    @CurrentUser() {requestingUserEmail}: CurrentUserDto,
    @Param() {id: clientId}: IdParamDto,
    @Body() {emailToRemove}: {emailToRemove: string},
  ) {
    return this.clientsService.removeMemberFromClientById(
      requestingUserEmail,
      clientId,
      emailToRemove,
    );
  }

  @Patch(':id/add-member')
  async addMemberToClientById(
    @CurrentUser() {requestingUserEmail}: CurrentUserDto,
    @Param() {id: clientId}: IdParamDto,
    @Body() {emailToAdd}: {emailToAdd: string},
  ) {
    return this.clientsService.addMemberFromClientById(
      requestingUserEmail,
      clientId,
      emailToAdd,
    );
  }
}
