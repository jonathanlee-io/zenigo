import {feedbackServiceConstants} from '@app/constants';
import {Controller} from '@nestjs/common';
import {MessagePattern, Payload} from '@nestjs/microservices';

import {EmbedScriptsService} from '../../services/embed-scripts/embed-scripts.service';

@Controller()
export class EmbedScriptsController {
  constructor(private readonly embedScriptsService: EmbedScriptsService) {}

  @MessagePattern(
    feedbackServiceConstants.messagePatterns.embedScripts.getBootstrapScript,
  )
  async getBootstrapWidgetScript(
    @Payload()
    {clientSubdomain}: {clientSubdomain: string},
  ) {
    return this.embedScriptsService.getBootstrapWidgetScript({clientSubdomain});
  }

  @MessagePattern(
    feedbackServiceConstants.messagePatterns.embedScripts.getWidgetScript,
  )
  async getWidgetScript() {
    return this.embedScriptsService.getWidgetScript();
  }
}
