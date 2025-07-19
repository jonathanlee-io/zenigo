import {Component, inject, input} from '@angular/core';
import {FormControl} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {ButtonDirective} from 'primeng/button';
import {ArrowRightIcon} from 'primeng/icons';

import {ClientStore} from '../../../../+state/client/client.store';
import {FeatureFlagAdminStore} from '../../../../+state/feature-flag-admin/feature-flag-admin.store';
import {ProjectStore} from '../../../../+state/project/project.store';

@Component({
  selector: 'app-continue-create-project-button',
  imports: [
    ArrowRightIcon,
    ButtonDirective,
    RouterLink,
  ],
  templateUrl: './continue-create-project-button.component.html',
  styleUrl: './continue-create-project-button.component.scss',
})
export class ContinueCreateProjectButtonComponent {
  isNewClient = input.required<boolean>();
  isReadyToContinue = input.required<boolean>();
  cancelRoutePath = input.required<string>();
  clientDisplayNameFormControl = input.required<FormControl<string>>();
  projectDisplayNameFormControl = input.required<FormControl<string>>();
  subdomainFormControl = input.required<FormControl<string>>();
  bugReportsEnabledFormControl = input.required<FormControl<boolean>>();
  featureRequestsEnabledFormControl = input.required<FormControl<boolean>>();
  featureFeedbackEnabledFormControl = input.required<FormControl<boolean>>();
  protected readonly clientStore = inject(ClientStore);
  private readonly projectStore = inject(ProjectStore);
  private readonly featureFlagAdminStore = inject(FeatureFlagAdminStore);

  doCreateProject() {
    if (!this.isReadyToContinue() ||
      (this.clientDisplayNameFormControl().invalid && this.clientDisplayNameFormControl().enabled) ||
      this.projectDisplayNameFormControl().invalid ||
      !this.subdomainFormControl().valid
    ) {
      return;
    }
    this.featureFlagAdminStore.createFeatureFlagProject({projectName: this.projectDisplayNameFormControl().value, clientId: this.clientStore.clientById()?.id ?? 'error'});
  }
}
