import {
  IDENTITY_SERVICE,
  IDENTITY_SERVICE_QUEUE,
  IdentityServiceContract,
  TypedClientProxy,
} from '@app/comms';
import {Inject, Injectable, Logger} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';

@Injectable()
export class SubdomainService {
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

  async getSubdomainAvailability({
    requestingUserId,
    requestingUserEmail,
    clientSubdomain,
    ip,
    subdomain,
  }: {
    requestingUserId: string;
    requestingUserEmail: string;
    clientSubdomain: string;
    ip: string;
    subdomain: string;
  }) {
    this.logger.log(`Getting subdomain availability for ${subdomain}`);
    return this.identityClient.sendAsync(
      IDENTITY_SERVICE.GET_SUBDOMAIN_AVAILABILITY,
      {
        authenticatedUser: {id: requestingUserId, email: requestingUserEmail},
        clientSubdomain,
        clientIp: ip,
        data: {subdomain},
      },
    );
  }
}
