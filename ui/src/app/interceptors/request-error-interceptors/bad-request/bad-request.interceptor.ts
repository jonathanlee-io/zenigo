import {HttpInterceptorFn} from '@angular/common/http';
import {inject} from '@angular/core';
import {MessageService} from 'primeng/api';
import {catchError, throwError} from 'rxjs';

import {HttpStatus} from '../../../common/enums/HttpStatus';

export const badRequestInterceptor: HttpInterceptorFn = (req, next) => {
  const messageService = inject(MessageService);
  return next(req).pipe(
      catchError((error) => {
        if (error.status === HttpStatus.BAD_REQUEST) {
          messageService.add({
            summary: 'Bad Request',
            detail: 'There was an issue with the request',
            severity: 'error',
            life: 5_000,
          });
        }
        return throwError(() => error);
      }),
  );
};
