import {HttpInterceptorFn} from '@angular/common/http';
import {inject} from '@angular/core';
import {catchError, throwError} from 'rxjs';

import {ToastStore} from '../../../+state/toast/toast.store';
import {HttpStatus} from '../../../common/enums/HttpStatus';

export const internalServerErrorInterceptor: HttpInterceptorFn = (
    req,
    next,
) => {
  const toastStore = inject(ToastStore);
  return next(req).pipe(
      catchError((error) => {
        if (error.status === HttpStatus.INTERNAL_SERVER_ERROR) {
          console.error(`Internal Server Error: ${error.message}`);
          toastStore.createToast({summary: 'Oops!', detail: 'Something went wrong.', severity: 'error'});
        }
        return throwError(() => error);
      }),
  );
};
