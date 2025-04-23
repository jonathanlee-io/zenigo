import {SubmitProductFeedbackDto} from '@app/dto';
import {Injectable} from '@nestjs/common';

@Injectable()
export class ProductsService {
  submitProductFeedback(
    {
      clientSubdomain,
      ip,
      submittedAt,
    }: {clientSubdomain: string; ip: string; submittedAt: string},
    productFeedbackDto: SubmitProductFeedbackDto,
  ) {
    return Promise.resolve({
      ...productFeedbackDto,
      clientSubdomain,
      ip,
      submittedAt,
    });
  }

  getProductConfig(clientSubdomain: string) {
    return Promise.resolve({clientSubdomain});
  }

  getProductFeedbackForProjectId(
    requestingUserId: string,
    projectId: string,
    limit: number,
    offset: number,
  ) {
    return Promise.resolve({requestingUserId, projectId, limit, offset});
  }
}
