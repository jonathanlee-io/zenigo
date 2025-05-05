import {identityServiceConstants} from '@app/constants';
import {MicroserviceSendResult, ProjectDto} from '@app/dto';
import {HttpStatus, Inject, Injectable, Logger} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {firstValueFrom} from 'rxjs';

import {ProductsRepositoryService} from '../../repositories/products-repository/products-repository.service';

@Injectable()
export class ProductsService {
  constructor(
    private readonly logger: Logger,
    @Inject(identityServiceConstants.queueName)
    private readonly identityClient: ClientProxy,
    private readonly productsRepository: ProductsRepositoryService,
  ) {}

  async submitProductFeedback({
    clientIp,
    clientSubdomain,
    submittedAt,
    userFeedback,
    widgetMetadataTimezone,
    widgetMetadataType,
    widgetMetadataUrl,
  }: {
    clientSubdomain: string;
    userFeedback: string;
    widgetMetadataType: 'bug_report' | 'feature_request' | 'feature_feedback';
    widgetMetadataUrl: string;
    widgetMetadataTimezone: string;
    clientIp: string;
    submittedAt: string;
  }): Promise<MicroserviceSendResult<{isSuccessful: boolean}>> {
    try {
      const getProjectResult = await firstValueFrom(
        this.identityClient.send<
          MicroserviceSendResult<ProjectDto>,
          {clientSubdomain: string}
        >(
          identityServiceConstants.messagePatterns.projects
            .getProjectByClientSubdomain,
          {
            clientSubdomain,
          },
        ),
      );
      if (getProjectResult.status !== HttpStatus.OK) {
        return {status: HttpStatus.NOT_FOUND, data: {isSuccessful: false}};
      }
      await this.productsRepository.createProductFeedback(
        {projectId: getProjectResult.data.id},
        {
          clientSubdomain: clientSubdomain,
          userFeedback,
          widgetMetadataType,
          widgetMetadataUrl,
          widgetMetadataTimezone,
          submittedAt,
          clientIp,
        },
      );
    } catch (err) {
      this.logger.error(err);
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        data: {isSuccessful: false},
      };
    }
    return {status: HttpStatus.CREATED, data: {isSuccessful: true}};
  }

  async getProductConfig({
    clientSubdomain,
  }: {
    clientSubdomain: string;
  }): Promise<MicroserviceSendResult<unknown>> {
    try {
      const getProjectResult = await firstValueFrom(
        this.identityClient.send<
          MicroserviceSendResult<ProjectDto>,
          {clientSubdomain: string}
        >(
          identityServiceConstants.messagePatterns.projects
            .getProjectByClientSubdomain,
          {
            clientSubdomain,
          },
        ),
      );
      if (getProjectResult.status !== HttpStatus.OK) {
        return {status: HttpStatus.NOT_FOUND, data: null};
      }
      const productConfig =
        await this.productsRepository.getProductConfigByProjectId({
          projectId: getProjectResult.data.id,
        });
      return {status: HttpStatus.OK, data: productConfig};
    } catch (err) {
      this.logger.error(err);
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        data: {isSuccessful: false},
      };
    }
  }

  async getProductFeedbackForProjectId({
    requestingUserEmail,
    projectId,
    offset,
    limit,
  }: {
    requestingUserEmail: string;
    projectId: string;
    limit: number;
    offset: number;
  }) {
    try {
      const getProjectResult = await firstValueFrom(
        this.identityClient.send<
          MicroserviceSendResult<ProjectDto>,
          {projectId: string}
        >(identityServiceConstants.messagePatterns.projects.getProjectById, {
          projectId,
        }),
      );
      if (getProjectResult.status !== HttpStatus.OK) {
        return {status: HttpStatus.NOT_FOUND, data: null};
      }
      const {
        client: {admins: projectAdmins, members: projectMembers},
      } = getProjectResult.data;
      if (
        !projectAdmins
          .map((admin) => admin.email)
          .includes(requestingUserEmail) &&
        !projectMembers
          .map((member) => member.email)
          .includes(requestingUserEmail)
      ) {
        return {status: HttpStatus.FORBIDDEN, data: null};
      }

      const feedback = await this.productsRepository.getFeedbackForProduct(
        projectId,
        limit,
        offset,
      );
      return {status: HttpStatus.OK, data: feedback};
    } catch (err) {
      this.logger.error(err);
    }
  }
}
