import {CommonModule} from '@angular/common';
import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {Dialog} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {ToggleSwitch} from 'primeng/toggleswitch';
import {TooltipModule} from 'primeng/tooltip';

interface Segment {
  id: string;
  name: string;
  description: string;
  value: boolean | string | number;
}

interface FeatureFlag {
  id: string;
  key: string;
  name: string;
  description: string;
  enabled: boolean;
  defaultValue: boolean | string | number;
  segments: Segment[];
}

@Component({
  selector: 'app-feature-flag-edit-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    Dialog,
    ButtonModule,
    InputSwitchModule,
    DropdownModule,
    TooltipModule,
    ToggleSwitch,
  ],
  templateUrl: './feature-flag-edit-dialog.component.html',
  styleUrl: './feature-flag-edit-dialog.component.scss',
})
export class FeatureFlagEditDialogComponent {
  visible = signal<boolean>(false);

  // Sample feature flag data
  featureFlag: FeatureFlag = {
    id: '1',
    key: 'new_dashboard_layout',
    name: 'New Dashboard Layout',
    description: 'Enables the redesigned dashboard layout with improved analytics.',
    enabled: true,
    defaultValue: false,
    segments: [
      {
        id: '1',
        name: 'Beta Testers',
        description: 'Users who opted into the beta program',
        value: true,
      },
      {
        id: '2',
        name: 'Enterprise Plan',
        description: 'Users on enterprise subscription plan',
        value: true,
      },
    ],
  };

  valueOptions = [
    {label: 'Enabled', value: true},
    {label: 'Disabled', value: false},
  ];

  open(featureFlagId: string) {
    console.log('Opening feature flag edit dialog for flag:', featureFlagId);
    this.visible.set(true);
  }

  close() {
    this.visible.set(false);
  }

  saveChanges() {
    // In a real app, you would save the changes
    // this.featureFlagService.updateFlag(this.featureFlag).subscribe(() => {
    //   this.close();
    // });
    console.log('Saving changes to feature flag:', this.featureFlag);
    this.close();
  }

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
    // In a real app, you might want to show a toast notification
    console.log('Copied to clipboard:', text);
  }
}
