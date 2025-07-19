import {FEATURE_FLAGS_SERVICE} from '@app/comms';
import {
  AnonymousMicroserviceControllerPayload,
  AuthenticatedMicroserviceControllerPayload,
} from '@app/dto';
import {Controller} from '@nestjs/common';
import {MessagePattern, Payload} from '@nestjs/microservices';

import {FlagsService} from '../../services/flags/flags.service';

@Controller()
export class FlagsController {
  constructor(private readonly flagsService: FlagsService) {}

  @MessagePattern(FEATURE_FLAGS_SERVICE.CREATE_FEATURE_FLAG_PROJECT)
  async createFeatureFlagProject(
    @Payload()
    {
      clientSubdomain,
      clientIp,
      authenticatedUser: {id: requestingUserId, email: requestingUserEmail},
      data: {projectName, clientId},
    }: AuthenticatedMicroserviceControllerPayload<never>,
  ) {
    return this.flagsService.createFeatureFlagProject({
      clientSubdomain,
      clientIp,
      requestingUserId,
      requestingUserEmail,
      projectName,
      clientId,
    });
  }

  @MessagePattern(FEATURE_FLAGS_SERVICE.GET_ALL_FLAGS)
  async getAllFlags(
    @Payload()
    {
      data: {apiKey, userEmail},
    }: AnonymousMicroserviceControllerPayload<{
      apiKey: string;
      userEmail: string | undefined;
    }>,
  ) {
    return this.flagsService.getAllFlags({apiKey, userEmail});
  }
}
