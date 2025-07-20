import {
  IDENTITY_SERVICE,
  IDENTITY_SERVICE_QUEUE,
  IdentityServiceContract,
  TypedClientProxy,
} from '@app/comms';
import {Inject, Injectable, Logger} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';

@Injectable()
export class ClientsService {
  private readonly identityClient: TypedClientProxy<
    keyof IdentityServiceContract,
    IdentityServiceContract
  >;

  constructor(
    private readonly logger: Logger,
    @Inject(IDENTITY_SERVICE_QUEUE) readonly untypedIdentityClient: ClientProxy,
  ) {
    this.identityClient = new TypedClientProxy(untypedIdentityClient);
  }

  async createClientProject({
    clientSubdomain,
    clientIp,
    requestingUserId,
    requestingUserEmail,
    clientId,
    name,
    subdomain,
  }: {
    clientSubdomain: string;
    clientIp: string;
    requestingUserId: string;
    requestingUserEmail: string;
    clientId: string;
    name: string;
    subdomain: string;
  }) {
    return this.identityClient.sendAsync(IDENTITY_SERVICE.CREATE_PROJECT, {
      clientSubdomain,
      clientIp,
      authenticatedUser: {id: requestingUserId, email: requestingUserEmail},
      data: {
        clientId,
        name,
        subdomain,
      },
    });
  }

  createClient({
    clientSubdomain,
    clientIp,
    clientDisplayName,
    requestingUserId,
    requestingUserEmail,
  }: {
    clientSubdomain: string;
    requestingUserId: string;
    requestingUserEmail: string;
    clientIp: string;
    clientDisplayName: string;
    paymentPlanId: string;
  }) {
    return this.identityClient.sendAsync(IDENTITY_SERVICE.CREATE_CLIENT, {
      clientSubdomain,
      clientIp,
      authenticatedUser: {id: requestingUserId, email: requestingUserEmail},
      data: {
        clientDisplayName,
      },
    });
  }
}
