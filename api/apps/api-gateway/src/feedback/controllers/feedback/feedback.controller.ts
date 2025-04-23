import {CurrentUser, CurrentUserDto, IsPublic} from '@app/auth';
import {Controller, Get, Header} from '@nestjs/common';

import {FeedbackService} from '../../services/feedback/feedback.service';

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @IsPublic()
  @Get('feedback-widget.js')
  @Header('Content-Type', 'text/javascript')
  @Header('Cache-Control', 'no-cache, no-store, must-revalidate')
  async getBoostrapWidgetScript(
    @CurrentUser() {clientSubdomain}: CurrentUserDto,
  ) {
    return this.feedbackService.getBootstrapWidgetScript({clientSubdomain});
  }

  @IsPublic()
  @Get('echonexus-widget.js')
  @Header('Content-Type', 'text/javascript')
  async getFeedbackWidgetScript() {
    return this.feedbackService.getFeedbackWidgetScript();
  }
}
