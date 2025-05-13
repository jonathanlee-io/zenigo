import {Component, inject, Signal, signal} from '@angular/core';

import {ProjectStore} from '../../../../../+state/project/project.store';
import {ProductFeedbackSubmissionDto} from '../../../../../dtos/projects/ProductFeedbackSubmissionDto';
import {FeedbackTableComponent} from '../feedback-table/feedback-table.component';

@Component({
  selector: 'app-feedback-tab',
  imports: [
    FeedbackTableComponent,
  ],
  templateUrl: './feedback-tab.component.html',
  styleUrl: './feedback-tab.component.scss',
})
export class FeedbackTabComponent {
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
  protected readonly projectStore = inject(ProjectStore);
}
