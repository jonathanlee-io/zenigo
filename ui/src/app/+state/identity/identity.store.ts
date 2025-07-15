import {inject} from '@angular/core';
import {patchState, signalStore, withMethods, withState} from '@ngrx/signals';
import {catchError, take, tap, throwError} from 'rxjs';

import {IdentityService} from '../../services/identity/identity.service';


export type IdentityState = {
  isLoading: boolean;
  isSubdomainAvailable: boolean | null;
};

const initialState: IdentityState = {
  isLoading: false,
  isSubdomainAvailable: null,
};

export const IdentityStore = signalStore(
    {providedIn: 'root'},
    withState(initialState),
    withMethods((store) => {
      const identityService = inject(IdentityService);
      return {
        fetchIsSubdomainAvailable: (subdomain: string) => {
          patchState(store, {isLoading: true, isSubdomainAvailable: null});
          identityService.fetchIsSubdomainAvailable(subdomain)
              .pipe(
                  take(1),
                  tap((subdomainResponse) => {
                    patchState(store, {
                      isLoading: false,
                      isSubdomainAvailable: subdomainResponse.isSubdomainAvailable,
                    });
                  }),
                  catchError((err) => {
                    patchState(store, {isLoading: false});
                    return throwError(() => err);
                  }),
              )
              .subscribe();
        },
      };
    }),
);
