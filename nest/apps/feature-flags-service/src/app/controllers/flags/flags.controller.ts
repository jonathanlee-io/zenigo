import {FEATURE_FLAGS_SERVICE} from '@app/comms';
import {AnonymousMicroserviceControllerPayload} from '@app/dto';
import {Controller, Logger} from '@nestjs/common';
import {MessagePattern, Payload} from '@nestjs/microservices';

import {FlagsService} from '../../services/flags/flags.service';

@Controller()
export class FlagsController {
  constructor(private readonly flagsService: FlagsService) {}

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
    Logger.log(
      `Received request to get all flags for apiKey: ${apiKey} with optional userEmail: ${userEmail}`,
    );
    return this.flagsService.getAllFlags({apiKey, userEmail});
  }
}
