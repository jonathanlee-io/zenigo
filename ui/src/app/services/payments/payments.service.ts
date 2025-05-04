import {HttpClient} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {PaymentStatus} from '../../+state/payment/payment.store';
import {TenantStore} from '../../+state/tenant/tenant.store';
import {environment} from '../../../environments/environment';
import {PaymentPlanDto} from '../../dtos/payments/PaymentPlan.dto';
import {TrialAndSubscriptionsForUserDto} from '../../dtos/payments/TrialAndSubscriptionsForUser.dto';

@Injectable({
  providedIn: 'root',
})
export class PaymentsService {
  private readonly httpClient = inject(HttpClient);
  private readonly tenantStore = inject(TenantStore);

  getPaymentStatusForLoggedInCustomer(): Observable<{
    status: PaymentStatus;
    trialEndDate?: string;
  }> {
    return this.httpClient.get<{
      status: PaymentStatus;
      trialEndDate?: string;
    }>(
        this.tenantStore.getFullRequestUrl(
            `${environment.PAYMENTS_SERVICE_BASE_URL}/customer-status`,
        ),
    );
  }

  getActiveSubscriptionsForLoggedInCustomer() {
    return this.httpClient.get<TrialAndSubscriptionsForUserDto>(
        this.tenantStore.getFullRequestUrl(
            `${environment.PAYMENTS_SERVICE_BASE_URL}/stripe/subscriptions/for-user`,
        ),
    );
  }

  cancelSubscriptions() {
    return this.httpClient.patch<unknown>(
        this.tenantStore.getFullRequestUrl(
            `${environment.PAYMENTS_SERVICE_BASE_URL}/stripe/controls/cancel-subscription`,
        ),
        {},
    );
  }

  getPaymentPlans() {
    return this.httpClient.get<PaymentPlanDto[]>(
        this.tenantStore.getFullRequestUrl(`v1/payments/plans`),
    );
  }
}
