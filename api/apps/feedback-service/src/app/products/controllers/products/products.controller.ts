import {feedbackServiceConstants} from '@app/constants';
import {
  AnonymousMicroserviceControllerPayload,
  AuthenticatedMicroserviceControllerPayload,
} from '@app/dto';
import {Controller} from '@nestjs/common';
import {MessagePattern, Payload} from '@nestjs/microservices';
import {DateTime} from 'luxon';

import {SubmitProductFeedbackRequestDto} from '../../dto/SubmitProductFeedbackRequest.dto';
import {ProductsService} from '../../services/products/products.service';

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @MessagePattern(
    feedbackServiceConstants.messagePatterns.products.submitFeedback,
  )
  async receiveFeedback(
    @Payload()
    {
      clientSubdomain,
      clientIp,
      data: {
        widgetMetadataTimezone,
        widgetMetadataUrl,
        widgetMetadataType,
        userFeedback,
      },
    }: AnonymousMicroserviceControllerPayload<SubmitProductFeedbackRequestDto>,
  ) {
    return this.productsService.submitProductFeedback({
      clientSubdomain,
      userFeedback,
      widgetMetadataType,
      widgetMetadataUrl,
      widgetMetadataTimezone,
      clientIp,
      submittedAt: DateTime.now().toISO(),
    });
  }

  @MessagePattern(feedbackServiceConstants.messagePatterns.products.getConfig)
  async getProductConfig(
    @Payload() {clientSubdomain}: AnonymousMicroserviceControllerPayload<never>,
  ) {
    return this.productsService.getProductConfig({clientSubdomain});
  }

  @MessagePattern(
    feedbackServiceConstants.messagePatterns.products.getFeedbackForProductById,
  )
  async getFeedbackForProductById(
    @Payload()
    {
      authenticatedUser: {email: requestingUserEmail},
      data: {projectId, limit, offset},
    }: AuthenticatedMicroserviceControllerPayload<{
      projectId: string;
      limit: number;
      offset: number;
    }>,
  ) {
    return this.productsService.getProductFeedbackForProjectId({
      requestingUserEmail,
      projectId,
      limit,
      offset,
    });
  }
}
