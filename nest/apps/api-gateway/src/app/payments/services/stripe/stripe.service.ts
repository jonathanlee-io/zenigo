import {IsPublic} from '@app/auth';
import {StripeWebhookHandler} from '@golevelup/nestjs-stripe';
import {Injectable, Logger} from '@nestjs/common';
import * as stripe from 'stripe';

@IsPublic()
@Injectable()
export class StripeService {
  constructor(private readonly logger: Logger) {}

  @StripeWebhookHandler('payment_intent.succeeded')
  handlePaymentIntentCreated(event: stripe.Stripe.PaymentIntentCreatedEvent) {
    this.logger.log(`Handling payment intent succeeded event...`);
    this.logger.log(event);
    return true;
  }

  @StripeWebhookHandler('*')
  async handleAllEvents(event: any) {
    this.logger.log(`Handling all events...`);
    this.logger.log(event);
    return true;
  }
}
