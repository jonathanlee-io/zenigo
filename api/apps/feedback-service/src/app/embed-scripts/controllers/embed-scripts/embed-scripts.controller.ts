import {CurrentUser, CurrentUserDto, IsPublic} from '@app/auth';
import {ProjectsService} from '@app/projects/services/projects/projects.service';
import {Controller, Get, Header} from '@nestjs/common';
import {ApiTags} from '@nestjs/swagger';

@ApiTags('Embed Scripts')
@Controller()
export class EmbedScriptsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @IsPublic()
  @Get('feedback-widget.js')
  @Header('Content-Type', 'text/javascript')
  @Header('Cache-Control', 'no-cache, no-store, must-revalidate')
  async getFeedbackWidgetScript(
    @CurrentUser()
    {clientSubdomain}: CurrentUserDto,
  ) {
    return this.projectsService.getFeedbackWidgetScript(clientSubdomain);
  }

  @IsPublic()
  @Get('echonexus-widget.js')
  @Header('Content-Type', 'text/javascript')
  async getWidgetScript() {
    return this.projectsService.getWidgetScript();
  }
}
