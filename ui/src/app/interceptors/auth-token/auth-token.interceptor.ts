import {HttpInterceptorFn} from '@angular/common/http';
import {inject} from '@angular/core';

import {TenantStore} from '../../+state/tenant/tenant.store';
import {SupabaseService} from '../../services/supabase/supabase.service';

export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const tenantStore = inject(TenantStore);
  const supabaseService = inject(SupabaseService);
  if (
    /(https):\/\/(.*).api.zenigo.io/.test(req.url) ||
    /(https):\/\/(.*).api.echonexus-staging.com/.test(req.url) ||
    /(https):\/\/(.*).api.echonexus-local.io:8000/.test(req.url) ||
    /(http):\/\/localhost:8000\/(.*)/.test(req.url) ||
    new RegExp('/(https)://(.*).' + tenantStore.customHostname() + '/').test(
        req.url,
    )
  ) {
    return next(
      (supabaseService.session?.access_token) ?
        req.clone({
          setHeaders: {
            Authorization: `Bearer ${supabaseService.session?.access_token}`,
          },
        }) :
        req,
    );
  }

  return next(req);
};
