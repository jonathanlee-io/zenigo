import {
  IDENTITY_SERVICE,
  IDENTITY_SERVICE_QUEUE,
  IdentityServiceContract,
  TypedClientProxy,
} from '@app/comms';
import {Inject, Injectable, Logger} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';

@Injectable()
export class AnonymousUsersService {
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

  async checkIn(
    {clientSubdomain, ip: clientIp}: {clientSubdomain: string; ip: string},
    {apiKey, userEmail}: {apiKey: string; userEmail: string},
  ) {
    this.identityClient.emit(IDENTITY_SERVICE.ANONYMOUS_USER_CHECK_IN, {
      clientIp,
      clientSubdomain,
      data: {
        apiKey,
        userEmail,
      },
    });
  }
}
