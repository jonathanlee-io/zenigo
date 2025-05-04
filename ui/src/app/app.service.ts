import {inject, Injectable} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import flagsmith from 'flagsmith';
import {filter, tap} from 'rxjs';

import {environment} from '../environments/environment';
import {UserAuthenticationStore} from './+state/auth/user-auth.store';
import {FeatureFlagsStore} from './+state/feature-flags/feature-flags.store';
import {FeatureFlagEnum} from './enums/FeatureFlag.enum';
import {SupabaseService} from './services/supabase/supabase.service';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private static readonly REFRESH_EVENT_ID = 1;

  private readonly userAuthenticationStore = inject(UserAuthenticationStore);
  private readonly featureFlagsStore = inject(FeatureFlagsStore);
  private readonly supabaseService = inject(SupabaseService);

  pipeAuthRouterEvents(router: Router) {
    router.events
        .pipe(
            filter(
                (routerEvent): routerEvent is NavigationEnd =>
                  routerEvent instanceof NavigationEnd,
            ),
            filter((event) => event.id === AppService.REFRESH_EVENT_ID),
            tap(() => {
              this.userAuthenticationStore.checkLoginOnRefresh();
            }),
            filter(() => this.userAuthenticationStore.isLoggedIn()),
        )
        .subscribe();
  }

  pipeNextParamAuthEvents(router: Router) {
    router.events
        .pipe(
            filter(
                (routerEvent): routerEvent is NavigationEnd =>
                  routerEvent instanceof NavigationEnd,
            ),
            tap(() => {
              this.userAuthenticationStore.checkNextParamOnNavigate();
            }),
        )
        .subscribe();
  }

  initSupabase() {
    this.supabaseService.authChanges((event, session) => {
      if (!session) {
        const supabaseSession = JSON.parse(
          localStorage.getItem('supabase-session') as string,
        );
        if (supabaseSession) {
          this.supabaseService.session = supabaseSession;
        }
      }
      if (event === 'SIGNED_IN') {
        this.supabaseService.session = session;
        this.userAuthenticationStore
            .onLoginComplete()
            .catch((reason) => console.error(reason));
      } else if (event === 'TOKEN_REFRESHED') {
        this.supabaseService.session = session;
        localStorage.setItem('supabase-session', JSON.stringify(session));
      } else if (event === 'SIGNED_OUT') {
        this.supabaseService.session = null;
        localStorage.removeItem('supabase-session');
      }
    });
  }

  initFeatureFlags() {
    this.featureFlagsStore.onFeatureFlagsInit();
    flagsmith
        .init({
          environmentID: environment.FLAGSMITH_CLIENT_SDK_KEY,
          api: environment.FLAGSMITH_API_URL,
          onChange: () => {
            this.featureFlagsStore.onFeatureFlagsLoaded([
              ...Object.values(FeatureFlagEnum).map((flag) => ({
                featureName: flag,
                isActive: flagsmith.hasFeature(flag),
              })),
            ]);
          },
        })
        .catch((reason) => console.error(reason));
  }
}
