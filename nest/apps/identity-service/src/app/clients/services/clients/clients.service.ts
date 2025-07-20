import {
  IDENTITY_SERVICE,
  IDENTITY_SERVICE_QUEUE,
  IdentityServiceContract,
  TypedClientProxy,
} from '@app/comms';
import {reservedSubdomains} from '@app/constants';
import {POSTSuccessDto} from '@app/dto';
import {
  BadRequestException,
  ForbiddenException,
  HttpStatus,
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import {ClientProxy} from '@nestjs/microservices';

import {PaymentsService} from '../../../../../../payments-service/src/app/payments/services/payments/payments.service';
import {IdentityEnvironment} from '../../../../config/environment';
import {UsersRepositoryService} from '../../../users/repositories/users-repository/users-repository.service';
import {CreateClientDto} from '../../dto/CreateClient.dto';
import {IsSubdomainAvailableDto} from '../../dto/IsSubdomainAvailable.dto';
import {ClientsRepositoryService} from '../../repositories/clients-repository/clients-repository.service';

@Injectable()
export class ClientsService implements OnModuleInit {
  private readonly identityClient: TypedClientProxy<
    keyof IdentityServiceContract,
    IdentityServiceContract
  >;

  constructor(
    private readonly logger: Logger,
    private readonly configService: ConfigService<IdentityEnvironment>,
    private readonly clientsRepository: ClientsRepositoryService,
    private readonly usersRepository: UsersRepositoryService,
    @Inject(IDENTITY_SERVICE_QUEUE) readonly untypedIdentityClient: ClientProxy,
  ) {
    this.identityClient = new TypedClientProxy(untypedIdentityClient);
  }

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
          paymentPlanId: PaymentsService.paymentPlans[0].id,
        },
      );
      if (!creationResult.isSuccessful) {
        throw new InternalServerErrorException(
          'Failed to create default client',
        );
      }
      const createdClientProject = await this.identityClient.sendAsync(
        IDENTITY_SERVICE.CREATE_PROJECT,
        {
          clientSubdomain: 'www',
          clientIp: '::',
          authenticatedUser: {
            email: adminUserRecord.email,
            id: adminUserRecord.id,
          },
          data: {
            clientId: creationResult.clientId,
            name: 'Zenigo',
            subdomain: 'www',
          },
        },
      );
      if (createdClientProject.status !== HttpStatus.CREATED) {
        throw new InternalServerErrorException(
          'Failed to create default client project',
        );
      }
      await this.clientsRepository.addSubdomainToProject(
        'zenigo',
        createdClientProject.data.createdClientProject.id,
      );
      await this.clientsRepository.addSubdomainToProject(
        'localhost',
        createdClientProject.data.createdClientProject.id,
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
    {clientDisplayName, paymentPlanId}: CreateClientDto,
  ) {
    const createdClient = await this.clientsRepository.create({
      requestingUserEmail,
      clientDisplayName,
      paymentPlanId,
    });
    return <POSTSuccessDto & {clientId: string}>{
      isSuccessful: true,
      clientId: createdClient.id,
    };
  }

  async checkIfSubdomainAvailable({subdomain}: IsSubdomainAvailableDto) {
    return {
      isSubdomainAvailable: !(
        (await this.clientsRepository.isExistsSubdomain(subdomain)) ||
        reservedSubdomains.includes(subdomain)
      ),
      subdomain,
    };
  }

  async getClientById({
    requestingUserEmail,
    clientId,
  }: {
    requestingUserEmail: string;
    clientId: string;
  }) {
    const client = await this.clientsRepository.getClientById(clientId, {
      isIncludeAdmins: true,
      isIncludeMembers: true,
      isIncludeCreatedBy: true,
    });
    if (!client) {
      throw new NotFoundException(`Could not find client with id: ${clientId}`);
    }
    if (
      client.createdBy.email !== requestingUserEmail &&
      !client.members
        .map((member) => member.email)
        .includes(requestingUserEmail) &&
      !client.admins.map((admin) => admin.email).includes(requestingUserEmail)
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

  async getClientByClientId({
    clientId,
    requestingUserEmail,
  }: {
    clientId: string;
    requestingUserEmail: string;
  }) {
    const client = await this.clientsRepository.getClientById(clientId, {
      isIncludeAdmins: true,
      isIncludeMembers: true,
      isIncludeCreatedBy: true,
    });
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
