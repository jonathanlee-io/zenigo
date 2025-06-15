import {IDENTITY_SERVICE} from '@app/comms';
import {AnonymousMicroserviceControllerPayload} from '@app/dto';
import {Controller} from '@nestjs/common';
import {EventPattern, Payload} from '@nestjs/microservices';

import {AnonymousUsersService} from '../../services/anonymous-users/anonymous-users.service';

@Controller()
export class AnonymousUsersController {
  constructor(private readonly anonymousUsersService: AnonymousUsersService) {}

  @EventPattern(IDENTITY_SERVICE.ANONYMOUS_USER_CHECK_IN)
  async checkIn(
    @Payload()
    {
      clientIp,
      clientSubdomain,
      data: {apiKey, userEmail},
    }: AnonymousMicroserviceControllerPayload<{
      apiKey: string;
      userEmail: string;
    }>,
  ) {
    return this.anonymousUsersService.checkIn({
      clientSubdomain,
      clientIp,
      apiKey,
      userEmail,
    });
  }
}
