import {ComponentFixture, TestBed} from '@angular/core/testing';
import {provideRouter} from '@angular/router';
import {faker} from '@faker-js/faker/locale/en';
import {byTestId, createRoutingFactory, Spectator} from '@ngneat/spectator';
import {render} from '@testing-library/angular';
import {screen} from '@testing-library/dom';

import {SharedAccountPageComponent} from './shared-account-page.component';
import {UserAuthenticationStore} from '../../../../+state/auth/user-auth.store';
import {testProviders} from '../../../../../test-util/test-providers.helper';

describe('SharedAccountPageComponent', () => {
  let mockUserAuthenticationStore: {
    isLoading: jasmine.Spy<jasmine.Func>,
    attemptSupabaseLoginWithGoogle: jasmine.Spy<jasmine.Func>,
    attemptSupabaseLoginWithGitHub: jasmine.Spy<jasmine.Func>,
  };

  let windowScrollToSpy: jasmine.Spy<jasmine.Func>;

  describe('Unit Tests', () => {
    let component: SharedAccountPageComponent;
    let fixture: ComponentFixture<SharedAccountPageComponent>;

    beforeEach(async () => {
      mockUserAuthenticationStore = {
        isLoading: jasmine.createSpy('isLoading').and.returnValue(false),
        attemptSupabaseLoginWithGoogle: jasmine.createSpy('attemptSupabaseLoginWithGoogle').and.resolveTo(null),
        attemptSupabaseLoginWithGitHub: jasmine.createSpy('attemptSupabaseLoginWithGitHub').and.resolveTo(null),
      };
      windowScrollToSpy = spyOn(window, 'scrollTo');

      await TestBed.configureTestingModule({
        imports: [SharedAccountPageComponent],
        providers: [
          provideRouter([]),
          {
            provide: UserAuthenticationStore,
            useValue: mockUserAuthenticationStore,
          },
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(SharedAccountPageComponent);
      component = fixture.componentInstance;
      fixture.componentRef.setInput('headingText', faker.lorem.words());
      fixture.detectChanges();
    });

    it('should create', async () => {
      expect(component).toBeTruthy();
    });
  });

  describe('@testing-library Integration Tests', () => {
    beforeEach(() => {
      mockUserAuthenticationStore = {
        isLoading: jasmine.createSpy('isLoading').and.returnValue(false),
        attemptSupabaseLoginWithGoogle: jasmine.createSpy('attemptSupabaseLoginWithGoogle').and.resolveTo(null),
        attemptSupabaseLoginWithGitHub: jasmine.createSpy('attemptSupabaseLoginWithGitHub').and.resolveTo(null),
      };
      windowScrollToSpy = spyOn(window, 'scrollTo');
    });

    it('should scroll to top on init', async () => {
      await render(SharedAccountPageComponent, {
        inputs: {
          headingText: faker.lorem.words(),
        },
        providers: [
          ...testProviders,
          provideRouter([]),
          {
            provide: UserAuthenticationStore,
            useValue: mockUserAuthenticationStore,
          },
        ],
      });

      expect(windowScrollToSpy).toHaveBeenCalledWith(0, 0);
    });

    it('should render component with heading text the same as input', async () => {
      const headingText = faker.lorem.words();
      await render(SharedAccountPageComponent, {
        inputs: {
          headingText,
        },
        providers: [
          ...testProviders,
          provideRouter([]),
          {
            provide: UserAuthenticationStore,
            useValue: mockUserAuthenticationStore,
          },
        ],
      });

      expect(screen.getByText(headingText).textContent).toBe(headingText);
      expect(mockUserAuthenticationStore.isLoading).toHaveBeenCalled();
    });

    it('should attempt login with google on click', async () => {
      await render(SharedAccountPageComponent, {
        inputs: {
          headingText: faker.lorem.words(),
        },
        providers: [
          ...testProviders,
          provideRouter([]),
          {
            provide: UserAuthenticationStore,
            useValue: mockUserAuthenticationStore,
          },
        ],
      });

      (await screen.findByTestId('sign-in-with-google-button')).click();
      expect(mockUserAuthenticationStore.attemptSupabaseLoginWithGoogle).toHaveBeenCalled();
    });

    it('should attempt login with github on click', async () => {
      await render(SharedAccountPageComponent, {
        inputs: {
          headingText: faker.lorem.words(),
        },
        providers: [
          ...testProviders,
          provideRouter([]),
          {
            provide: UserAuthenticationStore,
            useValue: mockUserAuthenticationStore,
          },
        ],
      });

      (await screen.findByTestId('sign-in-with-github-button')).click();
      expect(mockUserAuthenticationStore.attemptSupabaseLoginWithGitHub).toHaveBeenCalled();
    });
  });

  describe('Spectator Integration Tests', () => {
    let spectator: Spectator<SharedAccountPageComponent>;
    const createComponent = createRoutingFactory({
      component: SharedAccountPageComponent,
      detectChanges: false,
    });
    const headingText = faker.lorem.words();

    beforeEach(() => {
      mockUserAuthenticationStore = {
        isLoading: jasmine.createSpy('isLoading').and.returnValue(false),
        attemptSupabaseLoginWithGoogle: jasmine.createSpy('attemptSupabaseLoginWithGoogle').and.resolveTo(null),
        attemptSupabaseLoginWithGitHub: jasmine.createSpy('attemptSupabaseLoginWithGitHub').and.resolveTo(null),
      };
      windowScrollToSpy = spyOn(window, 'scrollTo');
      spectator = createComponent({
        providers: [{
          provide: UserAuthenticationStore,
          useValue: mockUserAuthenticationStore,
        }],
      });
      spectator.setInput('headingText', headingText);
    });

    it('should scroll to top on init', () => {
      spectator.detectChanges();
      expect(windowScrollToSpy).toHaveBeenCalledWith(0, 0);
    });

    it('should have text same as input', () => {
      expect(spectator.query('h2')).toHaveText(headingText);
      expect(mockUserAuthenticationStore.isLoading).toHaveBeenCalled();
    });

    it('should attempt login with google on click', () => {
      const signInWithGoogleButton = spectator.query(byTestId('sign-in-with-google-button'));
      spectator.click(signInWithGoogleButton as Element);
      expect(mockUserAuthenticationStore.attemptSupabaseLoginWithGoogle).toHaveBeenCalled();
    });

    it('should attempt login with github on click', () => {
      const signInWithGitHubButton = spectator.query(byTestId('sign-in-with-github-button'));
      spectator.click(signInWithGitHubButton as Element);
      expect(mockUserAuthenticationStore.attemptSupabaseLoginWithGitHub).toHaveBeenCalled();
    });
  });
});
