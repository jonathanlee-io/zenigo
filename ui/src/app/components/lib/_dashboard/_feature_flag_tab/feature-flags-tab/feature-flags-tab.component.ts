import {Component, signal} from '@angular/core';

import {FeatureFlag, FeatureFlagsTableComponent} from '../feature-flags-table/feature-flags-table.component';

@Component({
  selector: 'app-feature-flags-tab',
  imports: [
    FeatureFlagsTableComponent,
  ],
  templateUrl: './feature-flags-tab.component.html',
  styleUrl: './feature-flags-tab.component.scss',
})
export class FeatureFlagsTabComponent {
  featureFlags = signal<FeatureFlag[]>([
    {
      'id': '12345',
      'key': 'new-checkout-flow',
      'description': 'Enable new streamlined checkout flow',
      'status': 'Partial',
      'creationDate': new Date('2025-01-05'),
    },
    {
      'id': '23456',
      'key': 'dark-mode-v2',
      'description': 'Updated dark mode with improved contrast',
      'status': 'Enabled',
      'creationDate': new Date('2025-02-12'),
    },
    {
      'id': '34567',
      'key': 'analytics-dashboard',
      'description': 'New analytics dashboard with real-time metrics',
      'status': 'Disabled',
      'creationDate': new Date('2025-01-20'),
    },
    {
      'id': '45678',
      'key': 'auto-save-feature',
      'description': 'Automatically save user progress every 30 seconds',
      'status': 'Enabled',
      'creationDate': new Date('2025-03-08'),
    },
    {
      'id': '56789',
      'key': 'beta-search-algorithm',
      'description': 'New search algorithm with improved relevance scoring',
      'status': 'Partial',
      'creationDate': new Date('2025-02-25'),
    },
  ]);
}
