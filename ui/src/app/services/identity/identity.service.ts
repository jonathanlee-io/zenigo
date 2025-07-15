import {HttpClient} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';

import {TenantStore} from '../../+state/tenant/tenant.store';

@Injectable({
  providedIn: 'root',
})
export class IdentityService {
  private readonly httpClient = inject(HttpClient);
  private readonly tenantStore = inject(TenantStore);

  fetchIsSubdomainAvailable(subdomain: string) {
    return this.httpClient.get<{
      isSubdomainAvailable: boolean;
    }>(
        this.tenantStore.getFullRequestUrl(`v1/identity/subdomains/availability/${subdomain}`),

    );
  }
}
