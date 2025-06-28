import {Injectable} from '@nestjs/common';
import {v4} from 'uuid';

import {PaymentPlanDto} from '../../dto/PaymentPlan.dto';

@Injectable()
export class PaymentPlansService {
  async getPlans(): Promise<PaymentPlanDto[]> {
    return [
      {
        id: v4(),
        name: 'Hobby',
        description: 'Hobbyists and experimentation',
        monthlyPrice: '$5.99',
        maxProjectCount: 3,
        maxTeamMemberCount: 3,
        isCustomSubdomainIncluded: true,
        isEmbeddableFeedbackWidgetIncluded: true,
        isCustomHostnameIncluded: false,
        sortIndex: 0,
        stripePricingTableId: v4(),
        stripePublishableKey: v4(),
      },
      {
        id: v4(),
        name: 'Starter',
        description: 'Start-ups and small teams',
        monthlyPrice: '$11.99',
        maxProjectCount: 10,
        maxTeamMemberCount: 20,
        isCustomSubdomainIncluded: true,
        isEmbeddableFeedbackWidgetIncluded: true,
        isCustomHostnameIncluded: false,
        tag: 'Most Popular',
        sortIndex: 1,
        stripePricingTableId: v4(),
        stripePublishableKey: v4(),
      },
      {
        id: v4(),
        name: 'Professional',
        description: 'Established businesses and large teams',
        monthlyPrice: '$24.99',
        maxProjectCount: 50,
        maxTeamMemberCount: 150,
        isCustomSubdomainIncluded: true,
        isEmbeddableFeedbackWidgetIncluded: true,
        isCustomHostnameIncluded: true,
        sortIndex: 0,
        stripePricingTableId: v4(),
        stripePublishableKey: v4(),
      },
    ];
  }
}
