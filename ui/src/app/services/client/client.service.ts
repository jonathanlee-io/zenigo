import {HttpClient} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import {of} from 'rxjs';

import {TenantStore} from '../../+state/tenant/tenant.store';
import {POSTSuccessDto} from '../../dtos/POSTSuccess.dto';
import {ClientDto} from '../../dtos/client/Client.dto';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private readonly httpClient = inject(HttpClient);
  private readonly tenantStore = inject(TenantStore);

  registerNewClientAndProjectWithPlan(
      clientDisplayName: string,
      projectDisplayName: string,
      subdomain: string,
      isBugReportsEnabled: boolean,
      isFeatureRequestsEnabled: boolean,
      isFeatureFeedbackEnabled: boolean,
  ) {
    return this.httpClient.post<POSTSuccessDto & { clientId: string }>(
        this.tenantStore.getFullRequestUrl('v1/clients/create'),
        {
          clientDisplayName,
          projectDisplayName,
          subdomain,
          isBugReportsEnabled,
          isFeatureRequestsEnabled,
          isFeatureFeedbackEnabled,
        },
    );
  }

  fetchClientsWhereInvolved() {
    return this.httpClient.get<ClientDto[]>(
        this.tenantStore.getFullRequestUrl('v1/clients/where-involved'),
    );
  }

  fetchClientById(clientId: string) {
    console.log(`Fetching client by id: ${clientId}`);
    return of(<ClientDto>{
      id: 'a1b2c3d4-e5f6-4a5b-8c7d-9e8f7a6b5c4d',
      displayName: 'Acme Corporation',
      description: 'Enterprise software solutions for manufacturing industry',
      userId: 'u7v8w9x0-y1z2-3a4b-5c6d-7e8f9g0h1i2j',
      paymentPlanId: 'plan_premium_2024',
      subdomains: [
        {subdomain: 'acme'},
        {subdomain: 'acme-admin'},
      ],
      projects: [
        {name: 'Customer Portal'},
        {name: 'Inventory Management'},
        {name: 'Supply Chain Analytics'},
      ],
      createdBy: {
        supabaseUserId: 'sb_u7v8w9x0-y1z2-3a4b-5c6d-7e8f9g0h1i2j',
      },
      members: [
        {email: 'john.smith@acmecorp.com'},
        {email: 'sarah.johnson@acmecorp.com'},
        {email: 'tech.support@acmecorp.com'},
      ],
      admins: [
        {email: 'admin@acmecorp.com'},
        {email: 'cto@acmecorp.com'},
      ],
      createdAt: '2023-11-15T14:23:45Z',
      updatedAt: '2024-06-22T09:17:30Z',
    });
    // return this.httpClient.get<ClientDto>(
    //     this.tenantStore.getFullRequestUrl(`v1/clients/${clientId}`),
    // );
  }
}
