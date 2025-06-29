import {MicroserviceSendResult, PaymentPlanDto} from '@app/dto';
import {Cache, CACHE_MANAGER} from '@nestjs/cache-manager';
import {
  HttpStatus,
  Inject,
  Injectable,
  Logger,
  OnModuleInit,
} from '@nestjs/common';
import {isDeepEqual} from 'remeda';

import {PaymentsRepositoryService} from '../../repositories/payments-repository/payments-repository.service';

@Injectable()
export class PaymentsService implements OnModuleInit {
  static readonly paymentPlans: PaymentPlanDto[] = [
    {
      id: '8b556c3b-49e3-4bcc-b968-78be42ab427b',
      name: 'Indie Hacker',
      description: 'The essentials to provide your best work for your clients',
      monthlyPrice: '$4.99',
      maxProjectCount: 2,
      maxTeamMemberCount: 1,
      isEmbeddableFeedbackWidgetIncluded: true,
      isCustomSubdomainIncluded: true,
      isCustomHostnameIncluded: false,
      sortIndex: 0,
      tag: null,
      stripePricingTableId: 'prctbl_1QNQf2Ctqipjj4SBOOWyi4wy',
      stripePublishableKey:
        'pk_test_51QLq5wCtqipjj4SBEPU29LCPwZUPBXkrpmjhNYCjqBtAMjNiIzf718UNPLPEPbCokgs3ZXe7BV0plqmiiFQLiwkm00WAQxjvwc',
    },
    {
      id: '3e1a5257-58a8-4769-970a-2214ef7bf80e',
      name: 'Startup',
      description: 'A plan that scales with your rapidly growing business.',
      monthlyPrice: '$19.99',
      maxProjectCount: 10,
      maxTeamMemberCount: 100,
      isEmbeddableFeedbackWidgetIncluded: true,
      isCustomSubdomainIncluded: true,
      isCustomHostnameIncluded: false,
      sortIndex: 1,
      tag: 'Most Popular',
      stripePricingTableId: 'prctbl_1QNQmHCtqipjj4SB8UV3onnl',
      stripePublishableKey:
        'pk_test_51QLq5wCtqipjj4SBEPU29LCPwZUPBXkrpmjhNYCjqBtAMjNiIzf718UNPLPEPbCokgs3ZXe7BV0plqmiiFQLiwkm00WAQxjvwc',
    },
    {
      id: 'dc3f31cf-7d7d-4a54-b3c8-067bb6439fbc',
      name: 'Enterprise',
      description: 'Dedicated support and infrastructure for your company.',
      monthlyPrice: 'Negotiable',
      maxProjectCount: -1,
      maxTeamMemberCount: -1,
      isEmbeddableFeedbackWidgetIncluded: true,
      isCustomSubdomainIncluded: true,
      isCustomHostnameIncluded: true,
      sortIndex: 2,
      tag: null,
      stripePricingTableId: 'enterprise',
      stripePublishableKey: 'enterprise',
    },
  ];

  constructor(
    private readonly logger: Logger,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    private readonly paymentsRepository: PaymentsRepositoryService,
  ) {}

  async getPlans(): Promise<MicroserviceSendResult<PaymentPlanDto[]>> {
    const paymentPlans = await this.paymentsRepository.getAllPaymentPlans();
    return {
      status: HttpStatus.OK,
      data: paymentPlans,
    };
  }

  async onModuleInit() {
    this.logger.log('Initializing payment plans');
    const paymentPlans = await this.paymentsRepository.getAllPaymentPlans();
    if (
      isDeepEqual(
        paymentPlans.map((plan) => {
          delete plan.createdAt;
          delete plan.updatedAt;
          return plan;
        }),
        PaymentsService.paymentPlans,
      )
    ) {
      this.logger.log('Payment plans are up to date, no change required');
      return;
    }

    this.logger.log('Payment plans have changed, updating');
    await this.paymentsRepository.updatePaymentPlans(
      PaymentsService.paymentPlans,
    );
    this.logger.log(`Updated payment plans, clearing cache`);
    await this.cacheManager.del('PAYMENTS_SERVICE_PAYMENT_PLANS');
    this.logger.log(`Cleared cache`);
  }
}
