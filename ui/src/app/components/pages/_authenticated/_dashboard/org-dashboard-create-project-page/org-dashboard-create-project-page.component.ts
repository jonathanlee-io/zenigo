import {Component, inject, OnDestroy, signal} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {watchState} from '@ngrx/signals';
import {debounceTime, filter, Subscription, take, tap} from 'rxjs';

import {ClientStore} from '../../../../../+state/client/client.store';
import {RoutePath} from '../../../../../app.routes';
import {rebaseRoutePath, rebaseRoutePathAsString} from '../../../../../util/router/Router.utils';
import {CancelContinueComponent} from '../../../../lib/_project/cancel-continue/cancel-continue.component';
import {ClientFormComponent} from '../../../../lib/_project/client-form/client-form.component';
import {CreateProjectComponent} from '../../../../lib/_project/create-project/create-project.component';
import {
  CreateProjectDisplayNameComponent,
} from '../../../../lib/_project/create-project-display-name/create-project-display-name.component';
import {
  ProjectFeaturesSwitchesComponent,
} from '../../../../lib/_project/project-features-switches/project-features-switches.component';
import {SubdomainState} from '../../_create_client_pages/create-project-page/create-project-page.component';

@Component({
  selector: 'app-org-dashboard-create-project-page',
  imports: [
    CancelContinueComponent,
    ClientFormComponent,
    CreateProjectComponent,
    ProjectFeaturesSwitchesComponent,
    ReactiveFormsModule,
    CreateProjectDisplayNameComponent,
  ],
  templateUrl: './org-dashboard-create-project-page.component.html',
  styleUrl: './org-dashboard-create-project-page.component.scss',
})
export class OrgDashboardCreateProjectPageComponent implements OnDestroy {
  subdomainState: SubdomainState = 'INIT';
  protected readonly clientDisplayNameFormControl = new FormControl<string>('', {
    nonNullable: true, validators: Validators.compose([
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(100),
    ]),
  });
  protected readonly subdomainFormControl = new FormControl<string>('', {
    nonNullable: true,
    validators: Validators.compose([
      Validators.required,
      Validators.pattern(/^[a-z0-9][a-z0-9-_]{0,61}$/),
    ]),
  });
  protected readonly bugReportsEnabledFormControl = new FormControl<boolean>(true, {
    nonNullable: true,
    validators: [Validators.required],
  });
  protected readonly featureRequestsEnabledFormControl = new FormControl<boolean>(true, {
    nonNullable: true,
    validators: [Validators.required],
  });
  protected readonly featureFeedbackEnabledFormControl = new FormControl<boolean>(true, {
    nonNullable: true,
    validators: [Validators.required],
  });
  protected readonly ownerUpdatesEnabledFormControl = new FormControl<boolean>(true, {
    nonNullable: true,
    validators: [Validators.required],
  });
  protected readonly ownerIssuesEnabledFormControl = new FormControl<boolean>(false, {
    nonNullable: true,
    validators: [Validators.required],
  });
  protected readonly userIssuesEnabledFormControl = new FormControl<boolean>(false, {
    nonNullable: true,
    validators: [Validators.required],
  });
  protected readonly projectDisplayNameFormControl = new FormControl<string>('', {
    nonNullable: true, validators: Validators.compose([
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(100),
    ]),
  });
  protected readonly clientStore = inject(ClientStore);
  protected readonly isReadyToContinue = signal<boolean>(false);
  protected readonly rebaseRoutePath = rebaseRoutePath;
  protected readonly RoutePath = RoutePath;
  protected readonly rebaseRoutePathAsString = rebaseRoutePathAsString;
  private readonly subdomainValueChangesSubscription: Subscription;
  private readonly route = inject(ActivatedRoute);

  constructor() {
    watchState(this.clientStore, (state) => {
      if (state?.clientById?.displayName) {
        this.clientDisplayNameFormControl.setValue(state.clientById.displayName);
        this.clientDisplayNameFormControl.disable();
      }
      if (state.isLoading) {
        this.subdomainState = 'LOADING';
        return;
      }
      if (state.isSubdomainAvailable === null) {
        this.subdomainState = 'INIT';
        return;
      }
      this.subdomainState = state.isSubdomainAvailable ? 'AVAILABLE' : 'UNAVAILABLE';
      this.isReadyToContinue.set(this.subdomainFormControl.valid && this.subdomainState === 'AVAILABLE');
    });

    this.route.params.pipe(
        take(1),
        tap((params) => {
          this.clientStore.fetchClientById(params['clientId']);
        }),
    ).subscribe();

    this.clientDisplayNameFormControl.disable();

    this.subdomainValueChangesSubscription = this.subdomainFormControl.valueChanges.pipe(
        tap(() => this.isReadyToContinue.set(this.subdomainFormControl.valid && this.subdomainState === 'AVAILABLE')),
        filter((subdomain) => !!subdomain),
        filter(() => this.subdomainFormControl.valid),
        debounceTime(500),
        tap((subdomain) => {
          this.clientStore.fetchIsSubdomainAvailable(subdomain!);
          this.subdomainState = 'LOADING';
        }),
    ).subscribe();
  }

  ngOnDestroy() {
    this.subdomainValueChangesSubscription?.unsubscribe();
  }
}
