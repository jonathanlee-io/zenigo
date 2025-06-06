import {IDENTITY_SERVICE} from '@app/comms';
import {AuthenticatedMicroserviceControllerPayload} from '@app/dto';
import {Controller} from '@nestjs/common';
import {EventPattern, Payload} from '@nestjs/microservices';

import {AuthenticatedUsersService} from '../../services/authenticated-users/authenticated-users.service';

@Controller()
export class AuthenticatedUsersController {
  constructor(
    private readonly authenticatedUsersService: AuthenticatedUsersService,
  ) {}

  @EventPattern(IDENTITY_SERVICE.USER_CHECK_IN)
  async checkIn(
    @Payload()
    {
      authenticatedUser: {id: requestingUserId, email: requestingUserEmail},
    }: AuthenticatedMicroserviceControllerPayload<never>,
  ) {
    return this.authenticatedUsersService.checkIn(
      requestingUserId,
      requestingUserEmail,
    );
  }
}
