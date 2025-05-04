import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {delay, take, tap} from 'rxjs';

import {UserAuthenticationStore} from '../../../+state/auth/user-auth.store';
import {ProjectStore} from '../../../+state/project/project.store';
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
export class LoginSuccessComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly userAuthenticationStore = inject(UserAuthenticationStore);
  private readonly projectStore = inject(ProjectStore);
  private readonly router = inject(Router);

  async ngOnInit() {
    this.activatedRoute.url
        .pipe(
            take(1),
            delay(2500),
            tap(async () => {
              if (!this.userAuthenticationStore.isLoggedIn()) {
                return;
              }
              const isRedirectedToNext = await this.userAuthenticationStore.redirectToNextIfPresentOrOtherIfNot();
              if (isRedirectedToNext) {
                return;
              }

              const projectsWhereInvolved = await this.projectStore.loadProjectsWhereInvolved();
              if (projectsWhereInvolved.length === 0) {
                this.router.navigate([rebaseRoutePath(RoutePath.CREATE_CLIENT_INTRO)])
                    .catch(RouterUtils.navigateCatchErrorCallback);
                return;
              }

              this.router.navigate([rebaseRoutePath(RoutePath.DASHBOARD)])
                  .catch(RouterUtils.navigateCatchErrorCallback);
            }),
        )
        .subscribe();
  }
}
