import {DatePipe, NgClass, NgForOf, NgIf} from '@angular/common';
import {Component, inject, OnDestroy, OnInit, Signal, signal} from '@angular/core';
import {toObservable} from '@angular/core/rxjs-interop';
import {FormControl, FormsModule, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {ButtonModule} from 'primeng/button';
import {filter, Subscription, tap} from 'rxjs';

import {ProjectStore} from '../../../../../+state/project/project.store';
import {RoutePath} from '../../../../../app.routes';
import {ProductFeedbackSubmissionDto} from '../../../../../dtos/projects/ProductFeedbackSubmissionDto';
import {ProjectDto} from '../../../../../dtos/projects/Project.dto';
import {rebaseRoutePath, rebaseRoutePathAsString} from '../../../../../util/router/Router.utils';
import {
  ProjectActionsPanelComponent,
} from '../../../../lib/_project/project-actions-panel/project-actions-panel.component';
import {
  ProjectFeaturesSwitchesComponent,
} from '../../../../lib/_project/project-features-switches/project-features-switches.component';

@Component({
  selector: 'app-project-dashboard-page',
  imports: [
    ButtonModule,
    ProjectFeaturesSwitchesComponent,
    FormsModule,
    ProjectActionsPanelComponent,
    NgIf,
    NgClass,
    DatePipe,
    NgForOf,

  ],
  templateUrl: './project-dashboard-page.component.html',
  styleUrl: './project-dashboard-page.component.scss',
})
export class ProjectDashboardPageComponent implements OnInit, OnDestroy {
  activeTab: 'featureFlags' | 'feedback' = 'featureFlags';
  productFeedbackSubmissions: Signal<ProductFeedbackSubmissionDto[]> = signal([
    {
      id: 'fb-123456',
      createdAt: '2024-05-15T10:30:00Z',
      updatedAt: '2024-05-15T10:30:00Z',
      submittedAt: '2024-05-15T10:30:00Z',
      productId: 'prod-1001',
      clientIp: '192.168.1.100',
      clientSubdomain: 'acme',
      widgetMetadataType: 'feedback-form',
      widgetMetadataUrl: 'https://acme.example.com/dashboard',
      widgetMetadataTimezone: 'America/New_York',
      userFeedback: 'The new dashboard is amazing! Love the clean design and improved analytics.',
    },
    {
      id: 'fb-234567',
      createdAt: '2024-05-14T15:45:22Z',
      updatedAt: '2024-05-14T15:45:22Z',
      submittedAt: '2024-05-14T15:45:22Z',
      productId: 'prod-1001',
      clientIp: '192.168.2.201',
      clientSubdomain: 'acme',
      widgetMetadataType: 'feedback-form',
      widgetMetadataUrl: 'https://acme.example.com/reports',
      widgetMetadataTimezone: 'Europe/London',
      userFeedback: 'Would be great to have export to CSV option for reports.',
    },
    {
      id: 'fb-345678',
      createdAt: '2024-05-12T09:15:10Z',
      updatedAt: '2024-05-12T09:18:33Z',
      submittedAt: '2024-05-12T09:15:10Z',
      productId: 'prod-1001',
      clientIp: '192.168.3.54',
      clientSubdomain: 'globex',
      widgetMetadataType: 'feedback-form',
      widgetMetadataUrl: 'https://globex.example.com/settings',
      widgetMetadataTimezone: 'Asia/Tokyo',
      userFeedback: 'Found a bug in the settings page when trying to update profile picture.',
    },
    {
      id: 'fb-456789',
      createdAt: '2024-05-10T18:22:45Z',
      updatedAt: '2024-05-10T18:22:45Z',
      submittedAt: '2024-05-10T18:22:45Z',
      productId: 'prod-1002',
      clientIp: '192.168.4.128',
      clientSubdomain: 'nakatomi',
      widgetMetadataType: 'feedback-form',
      widgetMetadataUrl: 'https://nakatomi.example.com/products',
      widgetMetadataTimezone: 'America/Los_Angeles',
      userFeedback: 'The search functionality is too slow when there are more than 100 products.',
    },
    {
      id: 'fb-567890',
      createdAt: '2024-05-08T11:05:30Z',
      updatedAt: '2024-05-08T11:05:30Z',
      submittedAt: '2024-05-08T11:05:30Z',
      productId: 'prod-1002',
      clientIp: '192.168.5.76',
      clientSubdomain: 'acme',
      widgetMetadataType: 'feedback-form',
      widgetMetadataUrl: 'https://acme.example.com/checkout',
      widgetMetadataTimezone: 'America/Chicago',
      userFeedback: 'Checkout flow is much better now! Really smooth experience.',
    },
  ]).asReadonly();
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
  protected readonly projectStore = inject(ProjectStore);
  protected readonly rebaseRoutePath = rebaseRoutePath;
  protected readonly RoutePath = RoutePath;
  protected readonly rebaseRoutePathAsString = rebaseRoutePathAsString;
  private readonly route = inject(ActivatedRoute);
  private readonly bugReportsSubscription: Subscription;
  private readonly featureRequestsSubscription: Subscription;
  private readonly featureFeedbackSubscription: Subscription;
  private routeParamsSubscription?: Subscription;
  private readonly projectByIdSubscription?: Subscription;
  private readonly ownerUpdatesSubscription?: Subscription;
  private readonly ownerIssuesSubscription?: Subscription;
  private readonly userIssuesSubscription?: Subscription;

  constructor() {
    this.projectByIdSubscription = toObservable<ProjectDto | null>(this.projectStore.projectById).pipe(
        filter((value) => !!value),
        tap((projectById) => {
          this.bugReportsEnabledFormControl.setValue(projectById.isBugReportsEnabled, {emitEvent: false});
          this.featureRequestsEnabledFormControl.setValue(projectById.isFeatureRequestsEnabled, {emitEvent: false});
          this.featureFeedbackEnabledFormControl.setValue(projectById.isFeatureFeedbackEnabled, {emitEvent: false});
          this.ownerUpdatesEnabledFormControl.setValue(projectById.isOwnerUpdatesEnabled, {emitEvent: false});
          this.ownerIssuesEnabledFormControl.setValue(projectById.isOwnerIssuesEnabled, {emitEvent: false});
          this.userIssuesEnabledFormControl.setValue(projectById.isUserIssuesEnabled, {emitEvent: false});
        }),
    ).subscribe();

    this.bugReportsSubscription = this.bugReportsEnabledFormControl.valueChanges.pipe(
        tap((newValue) => this.updateProjectFormControlValue({isBugReportsEnabled: newValue})),
    ).subscribe();

    this.featureRequestsSubscription = this.featureRequestsEnabledFormControl.valueChanges.pipe(
        tap((newValue) => this.updateProjectFormControlValue({isFeatureRequestsEnabled: newValue})),
    ).subscribe();

    this.featureFeedbackSubscription = this.featureFeedbackEnabledFormControl.valueChanges.pipe(
        tap((newValue) => this.updateProjectFormControlValue({isFeatureFeedbackEnabled: newValue})),
    ).subscribe();

    this.ownerUpdatesSubscription = this.ownerUpdatesEnabledFormControl.valueChanges.pipe(
        tap((newValue) => this.updateProjectFormControlValue({isOwnerUpdatesEnabled: newValue})),
    ).subscribe();

    this.ownerIssuesSubscription = this.ownerIssuesEnabledFormControl.valueChanges.pipe(
        tap((newValue) => this.updateProjectFormControlValue({isOwnerIssuesEnabled: newValue})),
    ).subscribe();

    this.userIssuesSubscription = this.userIssuesEnabledFormControl.valueChanges.pipe(
        tap((newValue) => this.updateProjectFormControlValue({isUserIssuesEnabled: newValue})),
    ).subscribe();
  }

  ngOnInit() {
    this.routeParamsSubscription = this.route.params.pipe(
        tap((params) => {
          this.projectStore.loadProjectById(params['projectId']);
          this.projectStore.loadProductFeedbackByProjectId(params['projectId']);
        }),
    ).subscribe();
  }

  ngOnDestroy() {
    this.routeParamsSubscription?.unsubscribe();
    this.projectByIdSubscription?.unsubscribe();
    this.bugReportsSubscription?.unsubscribe();
    this.featureRequestsSubscription?.unsubscribe();
    this.featureFeedbackSubscription?.unsubscribe();
    this.ownerUpdatesSubscription?.unsubscribe();
    this.ownerIssuesSubscription?.unsubscribe();
    this.userIssuesSubscription?.unsubscribe();
  }

  private updateProjectFormControlValue(updateProjectValue: Partial<ProjectDto>) {
    const projectById = this.projectStore.projectById();
    if (!projectById) {
      return;
    }
    this.projectStore.updateProjectById(projectById.id, {...projectById, ...updateProjectValue});
  }
}
