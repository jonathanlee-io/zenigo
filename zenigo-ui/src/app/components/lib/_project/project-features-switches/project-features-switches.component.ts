import {NgIf} from '@angular/common';
import {Component, inject, input} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {Divider} from 'primeng/divider';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ToggleSwitchModule} from 'primeng/toggleswitch';

import {ProjectStore} from '../../../../+state/project/project.store';

@Component({
  selector: 'app-project-features-switches',
  imports: [
    ToggleSwitchModule,
    ReactiveFormsModule,
    NgIf,
    ProgressSpinnerModule,
    Divider,
  ],
  templateUrl: './project-features-switches.component.html',
  styleUrl: './project-features-switches.component.scss',
})
export class ProjectFeaturesSwitchesComponent {
  bugReportsEnabledFormControl = input.required<FormControl<boolean>>();
  featureRequestsEnabledFormControl = input.required<FormControl<boolean>>();
  featureFeedbackEnabledFormControl = input.required<FormControl<boolean>>();
  ownerUpdatesEnabledFormControl = input.required<FormControl<boolean>>();
  ownerIssuesEnabledFormControl = input.required<FormControl<boolean>>();
  userIssuesEnabledFormControl = input.required<FormControl<boolean>>();
  isHintEnabled = input.required<boolean>();
  protected readonly projectStore = inject(ProjectStore);
}
