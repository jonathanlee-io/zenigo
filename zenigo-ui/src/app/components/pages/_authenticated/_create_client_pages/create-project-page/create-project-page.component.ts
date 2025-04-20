import {Component, inject, OnDestroy, OnInit, signal} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {watchState} from '@ngrx/signals';
import {ButtonModule} from 'primeng/button';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ToggleSwitchModule} from 'primeng/toggleswitch';
import {debounceTime, filter, Subscription, take, tap} from 'rxjs';

import {ClientStore} from '../../../../../+state/client/client.store';
import {RoutePath} from '../../../../../app.routes';
import {PaymentPlanDto} from '../../../../../dtos/payments/PaymentPlan.dto';
import {PaymentsService} from '../../../../../services/payments/payments.service';
import {rebaseRoutePath} from '../../../../../util/router/Router.utils';
import {CancelContinueComponent} from '../../../../lib/_project/cancel-continue/cancel-continue.component';
import {ClientFormComponent} from '../../../../lib/_project/client-form/client-form.component';
import {CreateProjectComponent} from '../../../../lib/_project/create-project/create-project.component';
import {
  CreateProjectDisplayNameComponent,
} from '../../../../lib/_project/create-project-display-name/create-project-display-name.component';
import {
  ProjectFeaturesSwitchesComponent,
} from '../../../../lib/_project/project-features-switches/project-features-switches.component';

export type SubdomainState = 'INIT' | 'AVAILABLE' | 'UNAVAILABLE' | 'LOADING';

@Component({
  selector: 'app-create-project-page',
  imports: [
    ButtonModule,
    ReactiveFormsModule,
    ProgressSpinnerModule,
    ToggleSwitchModule,
    ProjectFeaturesSwitchesComponent,
    CreateProjectComponent,
    CancelContinueComponent,
    ClientFormComponent,
    CreateProjectDisplayNameComponent,
  ],
  standalone: true,
  templateUrl: './create-project-page.component.html',
  styleUrl: './create-project-page.component.scss',
})
export class CreateProjectPageComponent implements OnInit, OnDestroy {
  subdomainState: SubdomainState = 'INIT';
  protected readonly projectDisplayNameFormControl = new FormControl<string>('', {
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
  protected readonly clientDisplayNameFormControl = new FormControl<string>('', {
    nonNullable: true, validators: Validators.compose([
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(100),
    ]),
  });
  protected readonly rebaseRoutePath = rebaseRoutePath;
  protected readonly RoutePath = RoutePath;
  protected readonly clientStore = inject(ClientStore);
  protected readonly isReadyToContinue = signal<boolean>(false);
  private readonly pricingPlans = signal<PaymentPlanDto[]>([]);
  private readonly paymentsService = inject(PaymentsService);
  private subdomainValueChangesSubscription?: Subscription;
  private clientDisplayNameValueChangesSubscription?: Subscription;

  constructor() {
    watchState(this.clientStore, (state) => {
      if (state.isLoading) {
        this.subdomainState = 'LOADING';
        return;
      }
      if (state.isSubdomainAvailable === null) {
        this.subdomainState = 'INIT';
        return;
      }
      this.subdomainState = state.isSubdomainAvailable ? 'AVAILABLE' : 'UNAVAILABLE';
      this.isReadyToContinue.set(this.subdomainFormControl.valid && this.clientDisplayNameFormControl.valid && this.subdomainState === 'AVAILABLE');
    });

    this.subdomainValueChangesSubscription = this.subdomainFormControl.valueChanges.pipe(
        tap(() => this.isReadyToContinue.set(this.subdomainFormControl.valid && this.clientDisplayNameFormControl.valid && this.subdomainState === 'AVAILABLE')),
        filter((subdomain) => !!subdomain),
        filter(() => this.subdomainFormControl.valid),
        debounceTime(500),
        tap((subdomain) => {
          this.clientStore.fetchIsSubdomainAvailable(subdomain!);
          this.subdomainState = 'LOADING';
        }),
    ).subscribe();

    this.clientDisplayNameValueChangesSubscription = this.clientDisplayNameFormControl.valueChanges.pipe(
        tap(() => this.isReadyToContinue.set(this.subdomainFormControl.valid && this.clientDisplayNameFormControl.valid && this.subdomainState === 'AVAILABLE')),
    ).subscribe();
  }

  ngOnInit() {
    this.paymentsService.getPaymentPlans().pipe(
        take(1),
        tap((paymentPlans) => {
          this.pricingPlans.set(paymentPlans);
        }),
    ).subscribe();
  }

  ngOnDestroy() {
    this.subdomainValueChangesSubscription?.unsubscribe();
    this.clientDisplayNameValueChangesSubscription?.unsubscribe();
  }
}
