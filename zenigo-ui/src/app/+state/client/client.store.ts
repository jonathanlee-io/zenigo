import {inject} from '@angular/core';
import {Router} from '@angular/router';
import {patchState, signalStore, withMethods, withState} from '@ngrx/signals';
import {catchError, take, tap, throwError} from 'rxjs';

import {RoutePath} from '../../app.routes';
import {ClientDto} from '../../dtos/client/Client.dto';
import {ClientService} from '../../services/client/client.service';
import {rebaseRoutePath, RouterUtils} from '../../util/router/Router.utils';
import {UserAuthenticationStore} from '../auth/user-auth.store';

export type ClientState = {
  isLoading: boolean;
  subdomain: string | null;
  customHostname: string | null;
  clientById: ClientDto | null;
  isSubdomainAvailable: boolean | null;
  currentlyCreatingClientId: string | null;
  currentlyCreatingClient: ClientDto | null;
};

const initialState: ClientState = {
  isLoading: false,
  subdomain: null,
  customHostname: null,
  clientById: null,
  isSubdomainAvailable: null,
  currentlyCreatingClientId: null,
  currentlyCreatingClient: null,
};

export const ClientStore = signalStore(
    {providedIn: 'root'},
    withState(initialState),
    withMethods((store) => {
      const router = inject(Router);
      const clientService = inject(ClientService);
      const userAuthenticationStore = inject(UserAuthenticationStore);
      return {
        resetIsSubdomainAvailable: () => {
          patchState(store, {isLoading: false, isSubdomainAvailable: null});
        },
        fetchClientById: (clientId: string) => {
          patchState(store, {isLoading: false});
          clientService.fetchClientById(clientId)
              .pipe(
                  take(1),
                  tap((clientById) => {
                    patchState(store, {clientById, isLoading: false});
                  }),
                  catchError((err) => {
                    patchState(store, {...initialState});
                    return throwError(() => err);
                  }),
              )
              .subscribe();
        },
        fetchCreatedClient: () => {
          patchState(store, {isLoading: true});
          clientService
              .fetchClientsWhereInvolved()
              .pipe(
                  take(1),
                  tap((clients) => {
                    const createdClient = clients.find(
                        (client) =>
                          client.createdBy.supabaseUserId ===
                  userAuthenticationStore.currentUserId(),
                    );
                    if (!createdClient) {
                      patchState(store, {
                        currentlyCreatingClientId: null,
                        isLoading: false,
                      });
                    } else {
                      patchState(store, {
                        currentlyCreatingClientId: createdClient.id,
                        currentlyCreatingClient: createdClient,
                        isSubdomainAvailable: true,
                        isLoading: false,
                      });
                    }
                  }),
              )
              .subscribe();
        },
        fetchIsSubdomainAvailable: (subdomain: string) => {
          patchState(store, {isLoading: true, isSubdomainAvailable: null});
          clientService
              .fetchIsSubdomainAvailable(subdomain)
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
        registerNewClientAndProjectWithPlan: (
            clientDisplayName: string,
            projectDisplayName: string,
            subdomain: string,
            isBugReportsEnabled: boolean,
            isFeatureRequestsEnabled: boolean,
            isFeatureFeedbackEnabled: boolean,
        ) => {
          patchState(store, {isLoading: true});
          clientService
              .registerNewClientAndProjectWithPlan(
                  clientDisplayName,
                  projectDisplayName,
                  subdomain,
                  isBugReportsEnabled,
                  isFeatureRequestsEnabled,
                  isFeatureFeedbackEnabled,
              )
              .pipe(
                  take(1),
                  tap((response) => {
                    patchState(store, {
                      isLoading: false,
                      currentlyCreatingClientId: response.clientId,
                    });
                    if (!response.isSuccessful) {
                      console.error(
                          `Failed to register new client and project with plan`,
                      );
                      return;
                    }
                    router.navigate([rebaseRoutePath(RoutePath.DASHBOARD)])
                        .catch(RouterUtils.navigateCatchErrorCallback);
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
