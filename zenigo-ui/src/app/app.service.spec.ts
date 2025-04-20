import {TestBed} from '@angular/core/testing';

import {UserAuthenticationStore} from './+state/auth/user-auth.store';
import {FeatureFlagsStore} from './+state/feature-flags/feature-flags.store';
import {NotificationsStore} from './+state/notifications/notifications.store';
import {PaymentStore} from './+state/payment/payment.store';
import {AppService} from './app.service';
import {AuthService} from './services/auth/auth.service';
import {SupabaseService} from './services/supabase/supabase.service';

describe('AppService', () => {
  let service: AppService;
  let supabaseService: jasmine.SpyObj<SupabaseService>;
  let authService: jasmine.SpyObj<AuthService>;

  beforeEach(() => {
    supabaseService = jasmine.createSpyObj<SupabaseService>(['authChanges']);
    authService = jasmine.createSpyObj<AuthService>([
      'setNextParamInLocalStorageIfNotAnonymous',
    ]);

    TestBed.configureTestingModule({
      providers: [
        {
          provide: UserAuthenticationStore,
          useValue: {},
        },
        {
          provide: FeatureFlagsStore,
          useValue: {},
        },
        {
          provide: PaymentStore,
          useValue: {},
        },
        {
          provide: NotificationsStore,
          useValue: {},
        },
        {
          provide: SupabaseService,
          useValue: supabaseService,
        },
        {
          provide: AuthService,
          useValue: authService,
        },
      ],
    });

    service = TestBed.inject(AppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
