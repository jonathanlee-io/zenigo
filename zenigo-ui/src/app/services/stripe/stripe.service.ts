import {HttpClient} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {TenantStore} from '../../+state/tenant/tenant.store';
import {environment} from '../../../environments/environment';
import {StripeCheckoutSessionQueryResponse} from '../../dtos/stripe/StripeCheckoutSessionQueryResponse';

@Injectable({
  providedIn: 'root',
})
export class StripeService {
  private readonly httpClient = inject(HttpClient);
  private readonly tenantStore = inject(TenantStore);

  verifyCheckoutSession(
      stripeCheckoutSessionId: string,
  ): Observable<StripeCheckoutSessionQueryResponse> {
    return this.httpClient.get<StripeCheckoutSessionQueryResponse>(
        this.tenantStore.getFullRequestUrl(
            `${environment.PAYMENTS_SERVICE_BASE_URL}/stripe/query-checkout-session/${stripeCheckoutSessionId}`,
        ),
    );
  }
}
