import { NgOptimizedImage } from '@angular/common';
import {Component, inject, OnInit, signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {SharedModule} from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {take, tap} from 'rxjs';

import {RoutePath} from '../../../app.routes';
import {PaymentPlanDto} from '../../../dtos/payments/PaymentPlan.dto';
import {PaymentsService} from '../../../services/payments/payments.service';
import {rebaseRoutePath} from '../../../util/router/Router.utils';
import {
  FeatureDisplayComponent,
} from '../../lib/_landing-page/feature-display/feature-display.component';
import {MeteorsComponent} from '../../lib/_landing-page/meteors/meteors.component';
import {
  PricingDisplayComponent,
} from '../../lib/_landing-page/pricing-display/pricing-display.component';
import {BetaMessageComponent} from '../../lib/_message/beta-message/beta-message.component';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    ButtonModule,
    DialogModule,
    SharedModule,
    FeatureDisplayComponent,
    PricingDisplayComponent,
    ProgressSpinnerModule,
    BetaMessageComponent,
    MeteorsComponent,
    NgOptimizedImage,
    RouterLink
],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent implements OnInit {
  protected readonly rebaseRoutePath = rebaseRoutePath;
  protected readonly RoutePath = RoutePath;
  protected readonly pricingPlans = signal<PaymentPlanDto[]>([]);
  protected readonly featureDisplays = signal<{title: string; description: string; primeIconClass: string;}[]>([
    {
      title: 'Much Cheaper than Competitors',
      description: 'The inspiration for this product was real-world usage which unveiled an opportunity for significant cost savings for our customers.',
      primeIconClass: 'pi-dollar',
    },
    {
      title: 'Integrate in Minutes',
      description: 'With the feedback widget in a single deployable bundle, you can integrate it into your application in minutes, no need to worry about the complexities of data storage.',
      primeIconClass: 'pi-bolt',
    },
    {
      title: 'Start a Conversation',
      description: 'With the feedback widget, you can start a conversation with your customers and get feedback in real-time.',
      primeIconClass: 'pi-comments',
    },
    {
      title: 'Enterprise-Ready Identity Providers',
      description: 'Connect your organization\'s authentication provider of choice to our application, allowing seamless integration with existing SSO solutions.',
      primeIconClass: 'pi-shield',
    },
  ]);
  private readonly paymentsService = inject(PaymentsService);

  ngOnInit() {
    this.paymentsService.getPaymentPlans().pipe(
        take(1),
        tap((paymentPlans) => {
          this.pricingPlans.set(paymentPlans);
        }),
    ).subscribe();
  }
}
