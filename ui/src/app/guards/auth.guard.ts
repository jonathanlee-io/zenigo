import {inject} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';

import {UserAuthenticationStore} from '../+state/auth/user-auth.store';
import {RoutePath} from '../app.routes';
import {rebaseRoutePath, RouterUtils} from '../util/router/Router.utils';

export const authGuard: CanActivateFn = (route) => {
  const userAuthenticationStore = inject(UserAuthenticationStore);
  const router = inject(Router);
  if (userAuthenticationStore.loggedInState() === 'LOGGED_IN') {
    return true;
  }
  router
      .navigate([rebaseRoutePath(RoutePath.LOGIN)], {
        queryParams: {
          next: RouterUtils.buildNextParam(route.url),
        },
      })
      .catch(RouterUtils.navigateCatchErrorCallback);
  return false;
};
