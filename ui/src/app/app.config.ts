import {DOCUMENT} from '@angular/common';
import {provideHttpClient, withFetch, withInterceptors} from '@angular/common/http';
import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideRouter} from '@angular/router';
import Aura from '@primeng/themes/aura';
import {ConfirmationService, MessageService} from 'primeng/nest';
import {providePrimeNG} from 'primeng/config';
import {DialogService} from 'primeng/dynamicdialog';

import {routes} from './app.routes';
import {authTokenInterceptor} from './interceptors/auth-token/auth-token.interceptor';
import {requestErrorInterceptors} from './interceptors/request-error-interceptors';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {preset: Aura},
    }),
    {provide: Document, useExisting: DOCUMENT},
    MessageService,
    DialogService,
    ConfirmationService,
    provideHttpClient(
        withFetch(),
        withInterceptors([authTokenInterceptor, ...requestErrorInterceptors]),
    ),
  ],
};
