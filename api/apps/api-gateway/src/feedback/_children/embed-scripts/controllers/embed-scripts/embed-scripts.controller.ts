import {CurrentUser, CurrentUserDto, IsPublic} from '@app/auth';
import {Controller, Get, Header, Ip} from '@nestjs/common';

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
    @Ip() ip: string,
  ) {
    return this.embedScriptsService.getBootstrapWidgetScript({
      clientSubdomain,
      ip,
    });
  }

  @IsPublic()
  @Get('feedback-widget.js')
  @Header('Content-Type', 'text/javascript')
  async getFeedbackWidgetScript(
    @CurrentUser() {clientSubdomain}: CurrentUserDto,
    @Ip() ip: string,
  ) {
    return this.embedScriptsService.getFeedbackWidgetScript({
      clientSubdomain,
      ip,
    });
  }
}
