import {IsPublic} from '@app/auth';
import {StripeWebhookHandler} from '@golevelup/nestjs-stripe';
import {Injectable, Logger} from '@nestjs/common';
import * as stripe from 'stripe';

@IsPublic()
@Injectable()
export class StripeService {
  constructor(private readonly logger: Logger) {}

  @StripeWebhookHandler('payment_intent.succeeded')
  handlePaymentIntentCreated() {
    this.logger.log(`Handling payment intent succeeded event...`);
  }

  @StripeWebhookHandler('charge.updated')
  handleChargeUpdated() {
    this.logger.log(`Handling charge updated event...`);
  }

  @StripeWebhookHandler('charge.succeeded')
  handleChargeSucceeded(event: stripe.Stripe.ChargeSucceededEvent) {
    this.logger.log(`Handling charge succeeded event...`);
    this.logger.log(event.data.object.receipt_url);
  }
}
