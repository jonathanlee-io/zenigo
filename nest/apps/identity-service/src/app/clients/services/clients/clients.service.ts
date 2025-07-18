import {reservedSubdomains} from '@app/constants';
import {POSTSuccessDto} from '@app/dto';
import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';

import {PaymentsService} from '../../../../../../payments-service/src/app/payments/services/payments/payments.service';
import {IdentityEnvironment} from '../../../../config/environment';
import {UsersRepositoryService} from '../../../users/repositories/users-repository/users-repository.service';
import {CreateClientDto} from '../../dto/CreateClient.dto';
import {IsSubdomainAvailableDto} from '../../dto/IsSubdomainAvailable.dto';
import {ClientsRepositoryService} from '../../repositories/clients-repository/clients-repository.service';

@Injectable()
export class ClientsService implements OnModuleInit {
  constructor(
    private readonly logger: Logger,
    private readonly configService: ConfigService<IdentityEnvironment>,
    private readonly clientsRepository: ClientsRepositoryService,
    private readonly usersRepository: UsersRepositoryService,
  ) {}

  async onModuleInit() {
    const adminUserRecord = await this.usersRepository.findByEmail(
      this.configService.getOrThrow('ADMIN_EMAIL'),
    );
    if (!adminUserRecord) {
      this.logger.log(
        `Unable to create default client as admin user does not exist, skipping...`,
      );
      return;
    }
    const defaultClientRecord =
      await this.clientsRepository.findClientBySubdomain('www');
    if (!defaultClientRecord) {
      this.logger.log('Creating default client as no client exists yet');
      const creationResult = await this.createClient(
        this.configService.getOrThrow('ADMIN_EMAIL'),
        {
          clientDisplayName: 'Zenigo',
          projectDisplayName: 'Zenigo',
          subdomain: 'www',
          isBugReportsEnabled: true,
          isFeatureRequestsEnabled: true,
          isFeatureFeedbackEnabled: true,
        },
      );
      if (!creationResult.isSuccessful) {
        throw new InternalServerErrorException(
          'Failed to create default client',
        );
      }
      await this.clientsRepository.addSubdomainToProject(
        'zenigo',
        creationResult.projectId,
      );
      await this.clientsRepository.addSubdomainToProject(
        'localhost',
        creationResult.projectId,
      );
      this.logger.log(
        `Default client created successfully with subdomains: www, zenigo, localhost`,
      );
      return;
    }

    if (
      !defaultClientRecord.admins
        .map((admin) => admin.email)
        .includes(this.configService.getOrThrow('ADMIN_EMAIL'))
    ) {
      this.logger.log(
        `Default client exists but admin email is not set, updating now`,
      );
      await this.clientsRepository.addAdminToClientById(
        defaultClientRecord.id,
        this.configService.getOrThrow('ADMIN_EMAIL'),
      );
      return;
    }

    this.logger.log('Default client exists and admin email is set');
  }

  async createClient(
    requestingUserEmail: string,
    {
      clientDisplayName,
      projectDisplayName,
      subdomain,
      isBugReportsEnabled,
      isFeatureRequestsEnabled,
      isFeatureFeedbackEnabled,
    }: CreateClientDto,
  ) {
    this.logger.log(
      `User with e-mail: <${requestingUserEmail}> attempting to create/update client with subdomain: ${subdomain}`,
    );
    if (
      !(await this.checkIfSubdomainAvailable({subdomain})).isSubdomainAvailable
    ) {
      throw new BadRequestException('Subdomain already exists');
    }
    const {createdClient, createdSubdomain, createdProject} =
      await this.clientsRepository.registerNewClientWithTransaction(
        requestingUserEmail,
        clientDisplayName,
        projectDisplayName,
        subdomain,
        PaymentsService.paymentPlans[0].id,
        {
          isBugReportsEnabled,
          isFeatureRequestsEnabled,
          isFeatureFeedbackEnabled,
        },
      );
    if (!createdClient || !createdSubdomain || !createdProject) {
      throw new InternalServerErrorException();
    }
    return <POSTSuccessDto & {clientId: string; projectId: string}>{
      isSuccessful: true,
      clientId: createdClient.id,
      projectId: createdProject.id,
    };
  }

  async checkIfSubdomainAvailable({subdomain}: IsSubdomainAvailableDto) {
    this.logger.log(`'Checking if subdomain [ '${subdomain}' ] is available`);
    return {
      isSubdomainAvailable: !(
        (await this.clientsRepository.isExistsSubdomain(subdomain)) ||
        reservedSubdomains.includes(subdomain)
      ),
      subdomain,
    };
  }

  async getClientById(requestingUserId: string, clientId: string) {
    const client = await this.clientsRepository.getClientById(clientId, {
      isIncludeAdmins: true,
      isIncludeMembers: true,
      isIncludeCreatedBy: true,
    });
    if (!client) {
      throw new NotFoundException(`Could not find client with id: ${clientId}`);
    }
    if (
      client.createdBy.supabaseUserId !== requestingUserId &&
      !client.members
        .map((member) => member.supabaseUserId)
        .includes(requestingUserId) &&
      !client.admins
        .map((admin) => admin.supabaseUserId)
        .includes(requestingUserId)
    ) {
      throw new ForbiddenException();
    }
    return client;
  }

  async getClientsWhereInvolved(requestingUserEmail: string) {
    return this.clientsRepository.getClientsWhereUserInvolved(
      requestingUserEmail,
      {
        isIncludeCreatedBy: true,
        isIncludeMembers: true,
        isIncludeAdmins: true,
        isIncludeProjects: true,
      },
    );
  }

  async removeMemberFromClientById(
    requestingUserEmail: string,
    clientId: string,
    emailToRemove: string,
  ) {
    const client = await this.getClientForModification(
      requestingUserEmail,
      clientId,
    );
    if (!client.members.map((member) => member.email).includes(emailToRemove)) {
      throw new BadRequestException(
        `Could not find member with email: ${emailToRemove}`,
      );
    }
    return this.clientsRepository.removeMemberFromClientById(
      clientId,
      emailToRemove,
    );
  }

  async addMemberFromClientById(
    requestingUserEmail: string,
    clientId: string,
    emailToAdd: string,
  ) {
    const client = await this.getClientForModification(
      requestingUserEmail,
      clientId,
    );
    if (client.members.map((member) => member.email).includes(emailToAdd)) {
      throw new BadRequestException(
        `Member with email: ${emailToAdd} already exists`,
      );
    }
    const userToAdd = await this.usersRepository.findByEmail(emailToAdd);
    if (!userToAdd) {
      throw new BadRequestException(
        `Could not find user with email: ${emailToAdd}`,
      );
    }
    return this.clientsRepository.addMemberToClientById(clientId, emailToAdd);
  }

  async getClientByClientSubdomain({
    clientSubdomain,
    requestingUserEmail,
  }: {
    clientSubdomain: string;
    requestingUserEmail: string;
  }) {
    const [client] =
      await this.clientsRepository.getClientByClientSubdomain(clientSubdomain);
    if (
      !client.admins
        .map((admin) => admin.email)
        .includes(requestingUserEmail) &&
      !client.members
        .map((member) => member.email)
        .includes(requestingUserEmail)
    ) {
      throw new ForbiddenException();
    }
    return client;
  }

  private async getClientForModification(
    requestingUserEmail: string,
    clientId: string,
  ) {
    const client = await this.clientsRepository.getClientById(clientId, {
      isIncludeAdmins: true,
      isIncludeMembers: true,
    });
    if (!client) {
      throw new NotFoundException(`Could not find client with id: ${clientId}`);
    }
    if (
      !client.admins.map((admin) => admin.email).includes(requestingUserEmail)
    ) {
      throw new ForbiddenException();
    }
    return client;
  }
}
