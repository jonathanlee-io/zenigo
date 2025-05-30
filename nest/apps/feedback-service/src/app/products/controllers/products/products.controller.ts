import {FEEDBACK_SERVICE} from '@app/comms';
import {
  AnonymousMicroserviceControllerPayload,
  AuthenticatedMicroserviceControllerPayload,
} from '@app/dto';
import {SubmitProductFeedbackRequestDto} from '@app/dto/feedback/SubmitProductFeedbackRequest.dto';
import {Controller} from '@nestjs/common';
import {MessagePattern, Payload} from '@nestjs/microservices';
import {DateTime} from 'luxon';

import {ProductsService} from '../../services/products/products.service';

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @MessagePattern(FEEDBACK_SERVICE.SUBMIT_FEEDBACK)
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

  @MessagePattern(FEEDBACK_SERVICE.GET_PRODUCT_CONFIG)
  async getProductConfig(
    @Payload()
    {clientSubdomain, clientIp}: AnonymousMicroserviceControllerPayload<never>,
  ) {
    return this.productsService.getProductConfig({clientSubdomain, clientIp});
  }

  @MessagePattern(FEEDBACK_SERVICE.GET_FEEDBACK_FOR_PRODUCT_BY_ID)
  async getFeedbackForProductById(
    @Payload()
    {
      clientSubdomain,
      clientIp,
      authenticatedUser: {id: requestingUserId, email: requestingUserEmail},
      data: {projectId, limit, offset},
    }: AuthenticatedMicroserviceControllerPayload<{
      projectId: string;
      limit: number;
      offset: number;
    }>,
  ) {
    return this.productsService.getProductFeedbackForProjectId({
      clientSubdomain,
      clientIp,
      requestingUserId,
      requestingUserEmail,
      projectId,
      limit,
      offset,
    });
  }
}
