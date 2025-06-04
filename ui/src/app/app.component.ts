
import {Component, inject, OnDestroy, OnInit, signal} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {MessageService} from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import {ConfirmDialog} from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';
import {ToastModule} from 'primeng/toast';
import {filter, Subscription, tap} from 'rxjs';

import {UserAuthenticationStore} from './+state/auth/user-auth.store';
import {AppService} from './app.service';
import {NavbarComponent} from './components/lib/_navbar/navbar/navbar.component';
import {ToastComponent} from './components/lib/_toast/toast/toast.component';
import {FooterComponent} from './components/lib/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonModule,
    DialogModule,
    NavbarComponent,
    FooterComponent,
    ToastModule,
    ConfirmDialog,
    ToastComponent,
  ],
  providers: [MessageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Zenigo';
  isSidebarVisible = signal<boolean>(false);
  private readonly userAuthenticationStore = inject(UserAuthenticationStore);
  private readonly routerEventsSubscription: Subscription;

  constructor(
    private readonly router: Router,
    private readonly appService: AppService,
  ) {
    this.userAuthenticationStore.checkLoginOnRefresh();
    this.appService.initSupabase();
    this.routerEventsSubscription = this.router.events
        .pipe(
            filter(
                (routerEvent): routerEvent is NavigationEnd =>
                  routerEvent instanceof NavigationEnd,
            ),
            tap((event) => {
              this.isSidebarVisible.set(
                  /board|backlog|schedule/.test(event.url.split('/')?.[1]),
              );
            }),
        )
        .subscribe();
  }

  ngOnInit() {
    this.appService.pipeAuthRouterEvents(this.router);
    this.appService.pipeNextParamAuthEvents(this.router);
    this.appService.initFeatureFlags();
  }

  ngOnDestroy() {
    this.routerEventsSubscription?.unsubscribe();
  }
}
