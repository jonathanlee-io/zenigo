import {Inject, Injectable} from '@nestjs/common';

import {PrismaClient as FeedbackPrismaClient} from '../../../../../generated/client';
import {FEEDBACK_PRISMA} from '../../../../config/db.config';

@Injectable()
export class ProductsRepositoryService {
  constructor(
    @Inject(FEEDBACK_PRISMA) private readonly prisma: FeedbackPrismaClient,
  ) {}

  async createProductFeedback(
    productId: string,
    {
      clientSubdomain,
      ip: clientIp,
      userFeedback,
      widgetMetadataType,
      widgetMetadataUrl,
      widgetMetadataTimezone,
      submittedAt,
    }: {
      clientSubdomain: string;
      userFeedback: string;
      widgetMetadataType: 'bug_report' | 'feature_request' | 'feature_feedback';
      widgetMetadataUrl: string;
      widgetMetadataTimezone: string;
      ip: string;
      submittedAt: string;
    },
  ) {
    await this.prisma.productFeedbackSubmission.create({
      data: {
        product: {
          connect: {
            id: productId,
          },
        },
        userFeedback,
        widgetMetadataType: widgetMetadataType.toUpperCase() as any, // Regex validation ensures valid
        widgetMetadataUrl,
        widgetMetadataTimezone,
        clientIp,
        clientSubdomain,
        submittedAt,
      },
    });
  }

  async findProductFromProject(projectId: string) {
    return this.prisma.product.findUnique({
      where: {
        projectId,
      },
    });
  }

  async getFeedbackForProduct(
    productId: string,
    limit: number,
    offset: number,
  ) {
    const total = await this.prisma.productFeedbackSubmission.count({
      where: {productId},
    });
    return {
      total,
      rows: await this.prisma.productFeedbackSubmission.findMany({
        where: {
          productId,
        },
        skip: +offset,
        take: +limit,
        orderBy: {
          createdAt: 'desc',
        },
      }),
    };
  }
}
