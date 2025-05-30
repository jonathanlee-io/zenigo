import {NgClass, NgForOf, NgIf} from '@angular/common';
import {Component, inject, OnDestroy, OnInit, signal} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {ConfirmationService, MessageService} from 'primeng/nest';
import {ButtonModule} from 'primeng/button';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {TableModule} from 'primeng/table';
import {TagModule} from 'primeng/tag';
import {Subscription, tap} from 'rxjs';

import {UserAuthenticationStore} from '../../../../../+state/auth/user-auth.store';
import {ClientStore} from '../../../../../+state/client/client.store';
import {ProjectStore} from '../../../../../+state/project/project.store';
import {RoutePath} from '../../../../../app.routes';
import {rebaseRoutePathAsString} from '../../../../../util/router/Router.utils';

@Component({
  selector: 'app-client-dashboard',
  imports: [
    ButtonModule,
    NgIf,
    ProgressSpinnerModule,
    TableModule,
    TagModule,
    RouterLink,
    NgClass,
    NgForOf,

  ],
  templateUrl: './client-dashboard.component.html',
  styleUrl: './client-dashboard.component.scss',
})
export class ClientDashboardComponent implements OnInit, OnDestroy {
  protected readonly projectStore = inject(ProjectStore);
  protected readonly clientStore = inject(ClientStore);
  protected readonly rebaseRoutePathAsString = rebaseRoutePathAsString;
  protected readonly RoutePath = RoutePath;
  protected readonly clientId = signal<string>('');
  private readonly route = inject(ActivatedRoute);
  private readonly confirmationService = inject(ConfirmationService);
  private readonly messageService = inject(MessageService);
  private readonly userAuthenticationStore = inject(UserAuthenticationStore);
  private routeParamsSubscription?: Subscription;

  ngOnInit() {
    this.routeParamsSubscription = this.route.params.pipe(
        tap((params) => {
          const {clientId} = params;
          this.clientId.set(clientId);
          this.loadProjectsForClient(clientId);
        }),
    ).subscribe();
  }

  ngOnDestroy() {
    this.routeParamsSubscription?.unsubscribe();
  }

  loadProjectsForClient(clientId: string) {
    this.projectStore.loadProjectsForClient(clientId);
    this.clientStore.fetchClientById(clientId);
  }

  isCurrentUserAdmin() {
    return this.clientStore.clientById()?.
        admins.map((admin) => admin.email)
        .includes(this.userAuthenticationStore.currentUserEmail() ?? '');
  }

  isUserAdmin(email: string) {
    return this.clientStore.clientById()?.
        admins.map((admin) => admin.email)
        .includes(email);
  }

  promptToggleAdmin(adminEmail: string) {
    this.confirmationService.confirm({
      message: `Are you sure you want to ${this.isUserAdmin(adminEmail) ? 'revoke' : 'grant'} ${adminEmail} admin privileges?`,
      acceptButtonStyleClass: 'p-button-danger',
      acceptIcon: 'pi pi-exclamation-triangle',
      rejectIcon: 'pi pi-times',
      closable: false,
      accept: () => this.messageService.add({
        summary: 'Admin privileges updated',
        detail: `${this.isUserAdmin(adminEmail) ? 'Revoking' : 'Granting'} admin privileges to ${adminEmail}`,
        severity: 'success',
        life: 3000,
      }),
    });
  }

  promptRemoveMember(memberEmail: string) {
    this.confirmationService.confirm({
      message: `Are you sure you want to revoke ${memberEmail} member privileges?`,
      acceptButtonStyleClass: 'p-button-danger',
      acceptIcon: 'pi pi-trash',
      rejectIcon: 'pi pi-times',
      closable: false,
      accept: () => this.messageService.add({
        summary: 'Member removed',
        detail: `Removing ${memberEmail} from organization: ${this.clientStore.clientById()?.displayName}`,
        severity: 'success',
        life: 3000,
      }),
    });
  }

  getSeverity(flag: boolean) {
    return (flag) ? 'success': 'danger';
  }

  getSeverityLabel(flag: boolean) {
    return (flag) ? 'Enabled': 'Disabled';
  }

  commaListSubdomains(subdomains: {subdomain: string}[]) {
    return subdomains.map((subdomain) => subdomain.subdomain).join(' , ');
  }
}
