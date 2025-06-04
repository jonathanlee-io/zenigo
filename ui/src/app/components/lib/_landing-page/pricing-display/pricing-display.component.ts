
import {Component, input} from '@angular/core';
import {RouterLink} from '@angular/router';

import {RoutePath} from '../../../../app.routes';
import {PaymentPlanDto} from '../../../../dtos/payments/PaymentPlan.dto';
import {rebaseRoutePath} from '../../../../util/router/Router.utils';

@Component({
  selector: 'app-pricing-display',
  imports: [
    RouterLink,
  ],
  templateUrl: './pricing-display.component.html',
  styleUrl: './pricing-display.component.scss',
  standalone: true,
})
export class PricingDisplayComponent {
  name = input.required<string>();
  description = input.required<string>();
  monthlyPrice = input.required<string>();
  tag = input<string | undefined>(undefined);
  paymentPlanDetails = input.required<PaymentPlanDto>();
  protected readonly rebaseRoutePath = rebaseRoutePath;
  protected readonly RoutePath = RoutePath;
}
