import {CurrentUser, CurrentUserDto, IsPublic} from '@app/auth';
import {Controller, Get, Header} from '@nestjs/common';
import {ApiTags} from '@nestjs/swagger';

@ApiTags('Embed Scripts')
@Controller()
export class EmbedScriptsController {
  // constructor(private readonly projectsService: ProjectsService) {}

  @IsPublic()
  @Get('feedback-widget.js')
  @Header('Content-Type', 'text/javascript')
  @Header('Cache-Control', 'no-cache, no-store, must-revalidate')
  async getFeedbackWidgetScript(
    @CurrentUser()
    {clientSubdomain}: CurrentUserDto,
  ) {
    return {clientSubdomain};
    // return this.projectsService.getFeedbackWidgetScript(clientSubdomain);
  }

  @IsPublic()
  @Get('echonexus-widget.js')
  @Header('Content-Type', 'text/javascript')
  async getWidgetScript() {
    return null;
    // return this.projectsService.getWidgetScript();
  }
}
