import {PaymentPlanDto} from '@app/dto/payments/PaymentPlan.dto';
import {Inject, Injectable, Logger} from '@nestjs/common';

import {PrismaClient as PaymentsPrismaClient} from '../../../../../generated/client';
import {PAYMENTS_PRISMA} from '../../../../config/db.config';

@Injectable()
export class PaymentsRepositoryService {
  constructor(
    private readonly logger: Logger,
    @Inject(PAYMENTS_PRISMA)
    private readonly prismaService: PaymentsPrismaClient,
  ) {}

  async getAllPaymentPlans() {
    return this.prismaService.paymentPlan.findMany({
      orderBy: {
        sortIndex: 'asc',
      },
    });
  }

  async updatePaymentPlans(toUpdate: PaymentPlanDto[]) {
    return this.prismaService.$transaction(async (prisma) => {
      for (const paymentPlan of toUpdate) {
        const existingPlan = await prisma.paymentPlan.findFirst({
          where: {
            id: paymentPlan.id,
          },
        });
        if (!existingPlan) {
          this.logger.log(
            `Creating new payment plan <${paymentPlan.id}>: ${paymentPlan.name}`,
          );
          await prisma.paymentPlan.create({
            data: {
              id: paymentPlan.id,
              name: paymentPlan.name,
              description: paymentPlan.description,
              monthlyPrice: paymentPlan.monthlyPrice,
              maxProjectCount: paymentPlan.maxProjectCount,
              maxTeamMemberCount: paymentPlan.maxTeamMemberCount,
              isCustomSubdomainIncluded: paymentPlan.isCustomSubdomainIncluded,
              isCustomHostnameIncluded: paymentPlan.isCustomHostnameIncluded,
              isEmbeddableFeedbackWidgetIncluded:
                paymentPlan.isEmbeddableFeedbackWidgetIncluded,
              tag: paymentPlan.tag,
              sortIndex: paymentPlan.sortIndex,
              stripePricingTableId: paymentPlan.stripePricingTableId,
              stripePublishableKey: paymentPlan.stripePublishableKey,
            },
          });
        } else {
          this.logger.log(
            `Updating payment plan <${paymentPlan.id}>: ${paymentPlan.name}`,
          );
          await prisma.paymentPlan.updateMany({
            where: {
              id: paymentPlan.id,
            },
            data: {
              name: paymentPlan.name,
              description: paymentPlan.description,
              monthlyPrice: paymentPlan.monthlyPrice,
              maxProjectCount: paymentPlan.maxProjectCount,
              maxTeamMemberCount: paymentPlan.maxTeamMemberCount,
              isCustomSubdomainIncluded: paymentPlan.isCustomSubdomainIncluded,
              isCustomHostnameIncluded: paymentPlan.isCustomHostnameIncluded,
              isEmbeddableFeedbackWidgetIncluded:
                paymentPlan.isEmbeddableFeedbackWidgetIncluded,
              tag: paymentPlan.tag,
              sortIndex: paymentPlan.sortIndex,
              stripePricingTableId: paymentPlan.stripePricingTableId,
              stripePublishableKey: paymentPlan.stripePublishableKey,
            },
          });
        }
      }
    });
  }
}
