import {HttpClient} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';

import {TenantStore} from '../../+state/tenant/tenant.store';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  static readonly NEXT_PARAM_KEY = 'next';

  private readonly httpClient = inject(HttpClient);
  private readonly tenantStore = inject(TenantStore);

  checkIn() {
    return this.httpClient.post<{ isSuccessful: boolean; isCreatedNew: boolean }>(
        this.tenantStore.getFullRequestUrl('v1/users/authenticated/check-in'),
        {},
    );
  }

  setNextParamInLocalStorage(nextQueryParam: string) {
    localStorage.setItem(AuthService.NEXT_PARAM_KEY, nextQueryParam);
  }

  getNextParamFromLocalStorage() {
    return localStorage.getItem(AuthService.NEXT_PARAM_KEY);
  }

  clearNextParamFromLocalStorage() {
    localStorage.removeItem(AuthService.NEXT_PARAM_KEY);
  }
}
