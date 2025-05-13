import {NgClass} from '@angular/common';
import {Component, inject, input, ViewContainerRef} from '@angular/core';

import {TimeAgoDatePipe} from '../../../../../pipes/time-ago-date.pipe';
import {FeatureFlagEditDialogComponent} from '../feature-flag-edit-dialog/feature-flag-edit-dialog.component';

export type FeatureFlagStatus = 'Enabled' | 'Disabled' | 'Partial';

export interface FeatureFlag {
  id: string;
  key: string;
  description: string;
  status: FeatureFlagStatus;
  creationDate: Date;
}

@Component({
  selector: 'app-feature-flags-table',
  imports: [
    TimeAgoDatePipe,
    NgClass,
  ],
  templateUrl: './feature-flags-table.component.html',
  styleUrl: './feature-flags-table.component.scss',
})
export class FeatureFlagsTableComponent {
  featureFlags = input.required<FeatureFlag[]>();

  private readonly viewContainerRef = inject(ViewContainerRef);

  openFeatureFlagEditDialog(featureFlagId: string) {
    const componentRef = this.viewContainerRef.createComponent(FeatureFlagEditDialogComponent);
    componentRef.instance.open(featureFlagId);
  }
}
