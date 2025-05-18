import {IDENTITY_SERVICE} from '@app/comms';
import {AuthenticatedMicroserviceControllerPayload} from '@app/dto';
import {Controller} from '@nestjs/common';
import {MessagePattern, Payload} from '@nestjs/microservices';

import {AuthenticatedUsersService} from '../../services/authenticated-users/authenticated-users.service';

@Controller()
export class AuthenticatedUsersController {
  constructor(
    private readonly authenticatedUsersService: AuthenticatedUsersService,
  ) {}

  @MessagePattern(IDENTITY_SERVICE.USER_CHECK_IN)
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
