import {FEEDBACK_SERVICE} from '@app/comms';
import {AnonymousMicroserviceControllerPayload} from '@app/dto';
import {Controller} from '@nestjs/common';
import {MessagePattern, Payload} from '@nestjs/microservices';

import {EmbedScriptsService} from '../../services/embed-scripts/embed-scripts.service';

@Controller()
export class EmbedScriptsController {
  constructor(private readonly embedScriptsService: EmbedScriptsService) {}

  @MessagePattern(FEEDBACK_SERVICE.GET_BOOTSTRAP_SCRIPT)
  async getBootstrapWidgetScript(
    @Payload()
    {clientSubdomain}: AnonymousMicroserviceControllerPayload<never>,
  ) {
    return this.embedScriptsService.getBootstrapWidgetScript({clientSubdomain});
  }

  @MessagePattern(FEEDBACK_SERVICE.GET_WIDGET_SCRIPT)
  async getWidgetScript() {
    return this.embedScriptsService.getWidgetScript();
  }
}
