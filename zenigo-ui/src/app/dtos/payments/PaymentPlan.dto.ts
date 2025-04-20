export interface PaymentPlanDto {
  id: string;
  name: string;
  description: string;
  monthlyPrice: string;
  maxProjectCount: number;
  maxTeamMemberCount: number;
  isCustomSubdomainIncluded: boolean;
  isEmbeddableFeedbackWidgetIncluded: boolean;
  isCustomHostnameIncluded: boolean;
  tag?: string;
  sortIndex: number;
  stripePricingTableId: string;
  stripePublishableKey: string;
}
