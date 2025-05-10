import {
  FEEDBACK_SERVICE,
  FEEDBACK_SERVICE_QUEUE,
  FeedbackServiceContract,
  TypedClientProxy,
} from '@app/comms';
import {SubmitProductFeedbackDto} from '@app/dto';
import {HttpHelpersUtil} from '@app/util';
import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';

@Injectable()
export class ProductsService {
  private readonly feedbackClient: TypedClientProxy<
    keyof FeedbackServiceContract,
    FeedbackServiceContract
  >;

  constructor(
    @Inject(FEEDBACK_SERVICE_QUEUE) readonly untypedFeedbackClient: ClientProxy,
  ) {
    this.feedbackClient = new TypedClientProxy(untypedFeedbackClient);
  }

  async submitProductFeedback(
    {clientSubdomain, ip}: {clientSubdomain: string; ip: string},
    productFeedbackDto: SubmitProductFeedbackDto,
  ) {
    const result = await this.feedbackClient.sendAsync(
      FEEDBACK_SERVICE.SUBMIT_FEEDBACK,
      {
        clientSubdomain,
        clientIp: ip,
        data: {
          ...productFeedbackDto,
        },
      },
    );
    return HttpHelpersUtil.returnDataOrThrowError(result);
  }

  async getProductConfig({
    clientSubdomain,
    ip,
  }: {
    clientSubdomain: string;
    ip: string;
  }) {
    const result = await this.feedbackClient.sendAsync(
      FEEDBACK_SERVICE.GET_PRODUCT_CONFIG,
      {clientSubdomain, clientIp: ip, data: null as never},
    );
    return HttpHelpersUtil.returnDataOrThrowError(result);
  }

  async getProductFeedbackForProjectId(
    {
      clientSubdomain,
      ip,
      requestingUserId,
      requestingUserEmail,
    }: {
      clientSubdomain: string;
      ip: string;
      requestingUserId: string;
      requestingUserEmail: string;
    },
    {
      projectId,
      limit,
      offset,
    }: {projectId: string; limit: number; offset: number},
  ) {
    const result = await this.feedbackClient.sendAsync(
      FEEDBACK_SERVICE.GET_FEEDBACK_FOR_PRODUCT_BY_ID,
      {
        clientSubdomain,
        clientIp: ip,
        authenticatedUser: {
          id: requestingUserId,
          email: requestingUserEmail,
        },
        data: {
          id: projectId,
          limit,
          offset,
        },
      },
    );
    return HttpHelpersUtil.returnDataOrThrowError(result);
  }
}
