import {feedbackServiceConstants} from '@app/constants';
import {Controller} from '@nestjs/common';
import {MessagePattern, Payload} from '@nestjs/microservices';
import {ApiTags} from '@nestjs/swagger';

@ApiTags('Embed Scripts')
@Controller()
export class EmbedScriptsController {
  @MessagePattern(
    feedbackServiceConstants.messagePatterns.embedScripts.getBootstrapScript,
  )
  async getBootstrapWidgetScript(
    @Payload()
    {clientSubdomain}: {clientSubdomain: string},
  ) {
    return `console.log(${clientSubdomain})`;
  }

  @MessagePattern(
    feedbackServiceConstants.messagePatterns.embedScripts.getWidgetScript,
  )
  async getWidgetScript() {
    return `console.log('hello world')`;
  }
}
