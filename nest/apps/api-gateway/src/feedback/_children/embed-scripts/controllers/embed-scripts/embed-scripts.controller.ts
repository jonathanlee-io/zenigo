import {CurrentUser, CurrentUserDto, IsPublic} from '@app/auth';
import {CacheInterceptor} from '@nestjs/cache-manager';
import {Controller, Get, Header, Ip, UseInterceptors} from '@nestjs/common';
import {CacheTTL} from '@nestjs/common/cache';

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

  @CacheTTL(1000 * 60 * 60 * 24 * 7)
  @UseInterceptors(CacheInterceptor)
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
