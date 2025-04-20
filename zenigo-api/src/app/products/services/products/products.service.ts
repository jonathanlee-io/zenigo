import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import {ProjectsService} from '../../../projects/services/projects/projects.service';
import {WidgetMetadataType} from '../../dto/SubmitProductFeedbackRequest.dto';
import {ProductsRepositoryService} from '../../repositories/products-repository/products-repository.service';

@Injectable()
export class ProductsService {
  constructor(
    private readonly productsRepository: ProductsRepositoryService,
    private readonly projectsService: ProjectsService,
  ) {}

  async submitProductFeedback(productFeedback: {
    clientSubdomain: string;
    userFeedback: string;
    widgetMetadataType: WidgetMetadataType;
    widgetMetadataUrl: string;
    widgetMetadataTimezone: string;
    ip: string;
    submittedAt: string;
  }) {
    const [project] = await this.projectsService.getProjectFromSubdomain(
      productFeedback.clientSubdomain,
    );
    if (!project) {
      throw new NotFoundException(
        `Project with subdomain ${productFeedback.clientSubdomain} not found`,
      );
    }
    if (
      (productFeedback.widgetMetadataType === 'bug_report' &&
        !project.isBugReportsEnabled) ||
      (productFeedback.widgetMetadataType === 'feature_request' &&
        !project.isFeatureRequestsEnabled) ||
      (productFeedback.widgetMetadataType === 'feature_feedback' &&
        !project.isFeatureFeedbackEnabled)
    ) {
      throw new BadRequestException(`Feature not enabled for this project`);
    }
    const product = await this.productsRepository.findProductFromProject(
      project.id,
    );
    await this.productsRepository.createProductFeedback(
      product.id,
      productFeedback,
    );
    return {isSuccessful: true};
  }

  async getProductFeedbackForProjectId(
    requestingUserId: string,
    projectId: string,
    limit: number,
    offset: number,
  ) {
    const project = await this.projectsService.getProjectById(
      requestingUserId,
      projectId,
    ); // Will throw forbidden exception
    if (!project) {
      throw new NotFoundException(`Project with id ${projectId} not found`);
    }
    const product = await this.productsRepository.findProductFromProject(
      project.id,
    );
    if (!product) {
      throw new NotFoundException(`Product for project ${projectId} not found`);
    }
    return this.productsRepository.getFeedbackForProduct(
      product.id,
      limit,
      offset,
    );
  }

  async getProductConfig(clientSubdomain: string) {
    const [project] =
      await this.projectsService.getProjectFromSubdomain(clientSubdomain);
    if (!project) {
      throw new NotFoundException(
        `Product with subdomain ${clientSubdomain} not found`,
      );
    }
    return {
      isBugReportsEnabled: project.isBugReportsEnabled,
      isFeatureRequestsEnabled: project.isFeatureRequestsEnabled,
      isFeatureFeedbackEnabled: project.isFeatureFeedbackEnabled,
    };
  }
}
