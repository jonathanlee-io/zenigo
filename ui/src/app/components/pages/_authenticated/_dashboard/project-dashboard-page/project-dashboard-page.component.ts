import {NgClass} from '@angular/common';
import {Component, inject, OnDestroy, OnInit, ViewContainerRef} from '@angular/core';
import {toObservable} from '@angular/core/rxjs-interop';
import {FormControl, FormsModule, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {ButtonModule} from 'primeng/button';
import {filter, Subscription, tap} from 'rxjs';

import {ProjectStore} from '../../../../../+state/project/project.store';
import {RoutePath} from '../../../../../app.routes';
import {ProjectDto} from '../../../../../dtos/projects/Project.dto';
import {rebaseRoutePath, rebaseRoutePathAsString} from '../../../../../util/router/Router.utils';
import {AnalyticsTabComponent} from '../../../../lib/_dashboard/_analytics_tab/analytics-tab/analytics-tab.component';
import {
  FeatureFlagsTabComponent,
} from '../../../../lib/_dashboard/_feature_flag_tab/feature-flags-tab/feature-flags-tab.component';
import {FeedbackTabComponent} from '../../../../lib/_dashboard/_feedback_tab/feedback-tab/feedback-tab.component';
import {
  UserSegmentsTabComponent,
} from '../../../../lib/_dashboard/_user_segment_tab/user-segments-tab/user-segments-tab.component';
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
    NgClass,
    UserSegmentsTabComponent,
    FeatureFlagsTabComponent,
    FeedbackTabComponent,
    AnalyticsTabComponent,
  ],
  templateUrl: './project-dashboard-page.component.html',
  styleUrl: './project-dashboard-page.component.scss',
})
export class ProjectDashboardPageComponent implements OnInit, OnDestroy {
  activeTab: 'featureFlags' | 'feedback' | 'userSegments' | 'analytics' = 'featureFlags';
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
  private readonly viewContainerRef = inject(ViewContainerRef);
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
