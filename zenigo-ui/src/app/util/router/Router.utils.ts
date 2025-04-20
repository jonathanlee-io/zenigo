import {NgZone} from '@angular/core';
import {Router, UrlSegment} from '@angular/router';

import {RoutePath} from '../../app.routes';

export const RouterUtils = {
  navigateCatchErrorCallback: (reason: string) => {
    console.error(reason);
  },
  ngZoneRedirect(
      ngZone: NgZone,
      router: Router,
      path: string,
      replaceUrl: boolean,
  ) {
    ngZone.run(() => {
      router
          .navigate([path], {replaceUrl})
          .catch(RouterUtils.navigateCatchErrorCallback);
    });
  },
  buildNextParam: (urlSegments: UrlSegment[]) => {
    let nextParam = '';
    for (const urlSegment of urlSegments) {
      nextParam = `${nextParam}/${urlSegment}`;
    }
    return nextParam;
  },
} as const;

export const rebaseRoutePath = (routePath: RoutePath) => `/${routePath}`;

export const rebaseRoutePathAsString = (routePathAsString: string) => {
  return `/${routePathAsString}`;
};

