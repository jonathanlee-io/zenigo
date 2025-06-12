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
    {data: {apiKey}}: AnonymousMicroserviceControllerPayload<{apiKey: string}>,
  ) {
    Logger.log(`Received request to get all flags for apiKey: ${apiKey}`);
    return this.flagsService.getAllFlags();
  }
}
