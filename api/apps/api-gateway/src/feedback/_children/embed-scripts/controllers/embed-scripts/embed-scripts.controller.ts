import {CurrentUser, CurrentUserDto, IsPublic} from '@app/auth';
import {Controller, Get, Header} from '@nestjs/common';

import {EmbedScriptsService} from '../../services/embed-scripts/embed-scripts.service';

@Controller()
export class EmbedScriptsController {
  constructor(private readonly embedScriptsService: EmbedScriptsService) {}

  @IsPublic()
  @Get('bootstrap-widget.js')
  @Header('Content-Type', 'text/javascript')
  @Header('Cache-Control', 'no-cache, no-store, must-revalidate')
  async getBoostrapWidgetScript(
    @CurrentUser() {clientSubdomain}: CurrentUserDto,
  ) {
    return this.embedScriptsService.getBootstrapWidgetScript({clientSubdomain});
  }

  @IsPublic()
  @Get('feedback-widget.js')
  @Header('Content-Type', 'text/javascript')
  async getFeedbackWidgetScript() {
    return this.embedScriptsService.getFeedbackWidgetScript();
  }
}
