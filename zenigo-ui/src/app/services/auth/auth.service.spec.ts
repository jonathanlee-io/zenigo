import {provideHttpClient} from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import {inject, TestBed} from '@angular/core/testing';
import {firstValueFrom} from 'rxjs';

import {AuthService} from './auth.service';
import {environment} from '../../../environments/environment';

describe('AuthService', () => {
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService, provideHttpClient(), provideHttpClientTesting()],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it('should check in via HTTP', inject(
      [AuthService],
      async (service: AuthService) => {
        const mockResponse: { isSuccessful: boolean; isCreatedNew: boolean } = {
          isSuccessful: true,
          isCreatedNew: false,
        };

        const response$ = service.checkIn();
        const responsePromise = firstValueFrom(response$);

        const req = httpTestingController.expectOne(
            `${environment.USERS_SERVICE_BASE_URL}/authenticated/check-in`,
        );
        expect(req.request.method).toBe('POST');
        req.flush(mockResponse);

        expect(await responsePromise).toEqual(mockResponse);
        httpTestingController.verify();
      },
  ));
});
