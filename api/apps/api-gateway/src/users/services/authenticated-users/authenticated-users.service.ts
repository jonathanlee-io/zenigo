import {CurrentUserDto} from '@app/auth';
import {
  IDENTITY_SERVICE,
  IDENTITY_SERVICE_QUEUE,
  IdentityServiceContract,
  TypedClientProxy,
} from '@app/comms';
import {Inject, Injectable, Logger} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';

@Injectable()
export class AuthenticatedUsersService {
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
    {requestingUserId, requestingUserEmail, clientSubdomain}: CurrentUserDto,
    ip: string,
  ) {
    this.identityClient.emit(IDENTITY_SERVICE.USER_CHECK_IN, {
      authenticatedUser: {
        id: requestingUserId,
        email: requestingUserEmail,
      },
      clientSubdomain,
      clientIp: ip,
      data: null as never,
    });
  }
}
