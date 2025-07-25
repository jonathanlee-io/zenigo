import {computed, DOCUMENT, inject} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {patchState, signalStore, withComputed, withMethods, withState} from '@ngrx/signals';
import {MessageService} from 'primeng/api';
import {take, tap} from 'rxjs';

import {RoutePath} from '../../app.routes';
import {AuthService} from '../../services/auth/auth.service';
import {SupabaseService} from '../../services/supabase/supabase.service';
import {rebaseRoutePath, RouterUtils} from '../../util/router/Router.utils';
import {NotificationsStore} from '../notifications/notifications.store';

export type LoggedInState = 'INIT' | 'NOT_LOGGED_IN' | 'LOADING' | 'LOGGED_IN';

export type UserAuthenticationState = {
  loggedInState: LoggedInState;
  isDarkMode: boolean;
  isUseDefaultAvatarUrl: boolean;
};

const initialState: UserAuthenticationState = {
  loggedInState: 'INIT',
  isDarkMode: false,
  isUseDefaultAvatarUrl: false,
};

export const UserAuthenticationStore = signalStore(
    {providedIn: 'root'},
    withState(initialState),
    withMethods((store) => {
      const authService = inject(AuthService);
      const route = inject(ActivatedRoute);
      const router = inject(Router);
      return {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onUserAvatarUrlError: (_event: ErrorEvent) => {
          patchState(store, {isUseDefaultAvatarUrl: true});
        },
        userCheckIn: () => {
          if (store.loggedInState() === 'LOGGED_IN') {
            authService.checkIn().pipe(take(1)).subscribe();
          }
        },
        checkNextParamOnNavigate: () => {
          route.queryParams.pipe(
              take(1),
              tap((queryParams) => {
                if (queryParams[AuthService.NEXT_PARAM_KEY]) {
                  authService.setNextParamInLocalStorage(queryParams[AuthService.NEXT_PARAM_KEY]);
                }
              }),
          ).subscribe();
        },
        redirectToNextIfPresentOrOtherIfNot: async () => {
          const next = authService.getNextParamFromLocalStorage();
          if (next) {
            await router.navigate([decodeURIComponent(next)]);
            authService.clearNextParamFromLocalStorage();
            return true;
          }
          return false;
        },
      };
    }),
    withMethods((store) => {
      const router = inject(Router);
      const notificationsStore = inject(NotificationsStore);
      const supabaseService = inject(SupabaseService);
      const pageDocument = inject(DOCUMENT);
      return {
        toggleDarkMode: () => {
          const element = pageDocument.querySelector('html');
          if (!element) {
            return;
          }
          element.classList.toggle('dark');
          patchState(store, {isDarkMode: !store.isDarkMode()});
        },
        onLoginComplete: async () => {
          localStorage.setItem('supabase-session', JSON.stringify(supabaseService.session));
          patchState(store, {loggedInState: 'LOGGED_IN'});
          store.userCheckIn();
        },
        logout: async () => {
          patchState(store, {loggedInState: 'LOADING'});
          localStorage.removeItem('supabase-session');
          await supabaseService.signOut();
          patchState(store, {...initialState});
          router
              .navigate([rebaseRoutePath(RoutePath.LOGIN)])
              .catch(RouterUtils.navigateCatchErrorCallback);
          notificationsStore.unloadNotifications();
        },
      };
    }),
    withMethods((store) => {
      const messageService = inject(MessageService);
      return {
        onLoginError: (error: Error) => {
          console.error(error);
          messageService.add({
            severity: 'error',
            summary: 'Login Error',
            detail: 'Invalid login credentials',
            sticky: false,
            life: 5_000,
            closable: true,
          });
          store.logout().catch((reason) => console.error(reason));
        },
      };
    }),
    withMethods((store) => {
      const supabaseService = inject(SupabaseService);
      const router = inject(Router);
      return {
        attemptSupabaseLoginWithGoogle: async () => {
          patchState(store, {loggedInState: 'LOADING'});
          const {error} = await supabaseService.signInWithGoogle();
          if (error) {
            store.onLoginError(error);
          }
        },
        attemptSupabaseLoginWithGitHub: async () => {
          patchState(store, {loggedInState: 'LOADING'});
          const {error} = await supabaseService.signInWithGitHub();
          if (error) {
            store.onLoginError(error);
          }
        },
        checkLoginOnRefresh: () => {
          supabaseService.session = JSON.parse(
              localStorage.getItem('supabase-session') ?? JSON.stringify(null),
          );
          if (supabaseService.session !== null) {
            patchState(store, {loggedInState: 'LOGGED_IN'});
            setTimeout(() => {
              if (router.url === '/') {
                router.navigate([rebaseRoutePath(RoutePath.DASHBOARD)]).catch((reason) => console.error(reason));
              }
            }, 1000);
          }
        },
      };
    }),
    withComputed((store) => {
      const supabaseService = inject(SupabaseService);
      return {
        currentUserEmail: computed(() => supabaseService?.session?.user.email),
        currentUserId: computed(() => supabaseService?.session?.user.id),
        currentUserAvatarUrl: computed(() => {
          const session = supabaseService?.session;
          if (!session?.user) return null;

          const avatarUrl = session.user.user_metadata?.['avatar_url'] ??
          session.user.user_metadata?.['picture'] ??
          session.user.user_metadata?.['profilePicture'];

          // If no avatar URL from OAuth provider, generate a fallback
          if (!avatarUrl && session.user.email) {
            const email = session.user.email;
            const firstLetter = email.charAt(0).toUpperCase();
            return `https://ui-avatars.com/api/?name=${firstLetter}&background=6366f1&color=fff&size=32&rounded=true`;
          }

          return (store.isUseDefaultAvatarUrl()) ? `https://ui-avatars.com/api/?name=${session.user.email?.charAt(0).toUpperCase()}&background=6366f1&color=fff&size=32&rounded=true` : avatarUrl;
        }),
        isLoggedIn: computed(() => store.loggedInState() === 'LOGGED_IN'),
        isLoading: computed(() => store.loggedInState() === 'LOADING'),
      };
    }),
);
