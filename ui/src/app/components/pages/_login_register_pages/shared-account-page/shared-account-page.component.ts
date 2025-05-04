import {NgClass, NgIf, NgOptimizedImage} from '@angular/common';
import {Component, inject, input, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {ButtonModule} from 'primeng/button';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

import {UserAuthenticationStore} from '../../../../+state/auth/user-auth.store';
import {FeatureFlagsStore} from '../../../../+state/feature-flags/feature-flags.store';

@Component({
  selector: 'app-shared-account-page',
  imports: [
    ProgressSpinnerModule,
    NgIf,
    ButtonModule,
    RouterLink,
    NgClass,
    NgOptimizedImage,
  ],
  templateUrl: './shared-account-page.component.html',
  styleUrl: './shared-account-page.component.scss',
  standalone: true,
})
export class SharedAccountPageComponent implements OnInit {
  headingText = input.required<string>();
  accountPrompt = input.required<string>();
  accountPromptRoute = input.required<string>();
  redirectAnchorText = input.required<string>();
  protected readonly userAuthenticationStore = inject(UserAuthenticationStore);
  private readonly featureFlagStore = inject(FeatureFlagsStore);

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  doGoogleLogin() {
    if (!this.featureFlagStore.isSignInWithGoogleEnabled()) {
      return;
    }
    this.userAuthenticationStore.attemptSupabaseLoginWithGoogle();
  }

  doGithubLogin() {
    if (!this.featureFlagStore.isSignInWithGoogleEnabled()) {
      return;
    }
    this.userAuthenticationStore.attemptSupabaseLoginWithGitHub();
  }

  isGoogleButtonDisabled() {
    if (this.userAuthenticationStore.isLoading()) {
      return true;
    }
    return !this.featureFlagStore.isSignInWithGoogleEnabled();
  }

  isGitHubButtonDisabled() {
    if (this.userAuthenticationStore.isLoading()) {
      return true;
    }
    return !this.featureFlagStore.isSignInWithGitHubEnabled();
  }
}
