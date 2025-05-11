import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {watchState} from '@ngrx/signals';

import {UserAuthenticationStore} from '../../../+state/auth/user-auth.store';
import {RoutePath} from '../../../app.routes';
import {rebaseRoutePath, RouterUtils} from '../../../util/router/Router.utils';
import {SuccessCheckmarkComponent} from '../../lib/success-checkmark/success-checkmark.component';

@Component({
  selector: 'app-login-success',
  standalone: true,
  imports: [SuccessCheckmarkComponent],
  templateUrl: './login-success.component.html',
  styleUrl: './login-success.component.scss',
})
export class LoginSuccessComponent {
  private readonly userAuthenticationStore = inject(UserAuthenticationStore);
  private readonly router = inject(Router);

  constructor() {
    watchState(this.userAuthenticationStore, (state) => {
      if (state.loggedInState === 'LOGGED_IN') {
        setTimeout(() => {
          this.router.navigate([rebaseRoutePath(RoutePath.DASHBOARD)])
              .catch(RouterUtils.navigateCatchErrorCallback);
        }, 1000);
      }
    });
  }
}
