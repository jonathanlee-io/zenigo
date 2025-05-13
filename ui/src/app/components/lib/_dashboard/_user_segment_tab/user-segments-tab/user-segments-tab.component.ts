import {Component, signal} from '@angular/core';

import {UserSegment, UserSegmentsTableComponent} from '../user-segments-table/user-segments-table.component';


@Component({
  selector: 'app-user-segments-tab',
  imports: [
    UserSegmentsTableComponent,
  ],
  templateUrl: './user-segments-tab.component.html',
  styleUrl: './user-segments-tab.component.scss',
})
export class UserSegmentsTabComponent {
  userSegments = signal<UserSegment[]>([
    {
      id: '1',
      key: 'beta-testers',
      description: 'Users who have opted into our beta testing program',
      userCount: 245,
      creationDate: new Date('2023-11-15'),
    },
    {
      id: '2',
      key: 'premium-plan',
      description: 'Users on premium subscription plans',
      userCount: 1893,
      creationDate: new Date('2023-08-22'),
    },
    {
      id: '3',
      key: 'new-users',
      description: 'Users who signed up within the last 30 days',
      userCount: 732,
      creationDate: new Date('2024-01-05'),
    },
    {
      id: '4',
      key: 'high-usage',
      description: 'Users with high engagement metrics (>5 sessions/week)',
      userCount: 1245,
      creationDate: new Date('2023-10-10'),
    },
    {
      id: '5',
      key: 'enterprise-customers',
      description: 'Organizations on enterprise-level contracts',
      userCount: 78,
      creationDate: new Date('2023-12-01'),
    },
    {
      id: '6',
      key: 'mobile-users',
      description: 'Users who primarily access via mobile devices',
      userCount: 3421,
      creationDate: new Date('2024-02-18'),
    },
    {
      id: '7',
      key: 'early-adopters',
      description: 'First 500 users who joined our platform',
      userCount: 489,
      creationDate: new Date('2023-07-10'),
    },
    {
      id: '8',
      key: 'european-region',
      description: 'Users located in European countries',
      userCount: 2567,
      creationDate: new Date('2023-09-28'),
    },
  ]);
}
