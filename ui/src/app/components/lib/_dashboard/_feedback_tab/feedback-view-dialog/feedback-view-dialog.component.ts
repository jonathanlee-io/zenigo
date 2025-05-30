import {DatePipe} from '@angular/common';
import {Component, signal} from '@angular/core';
import {faker} from '@faker-js/faker/locale/en';
import {PrimeTemplate} from 'primeng/api';
import {ButtonDirective} from 'primeng/button';
import {Dialog} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {Tooltip} from 'primeng/tooltip';

import {
  ProductFeedbackSubmissionDto,
} from '../../../../../dtos/projects/ProductFeedbackSubmissionDto';

@Component({
  selector: 'app-feedback-view-dialog',
  imports: [
    ButtonDirective,
    Dialog,
    DropdownModule,
    PrimeTemplate,
    Tooltip,
    DatePipe,
  ],
  templateUrl: './feedback-view-dialog.component.html',
  styleUrl: './feedback-view-dialog.component.scss',
})
export class FeedbackViewDialogComponent {
  visible = signal<boolean>(false);
  protected readonly feedbackSubmission = signal<ProductFeedbackSubmissionDto>({
    id: faker.string.uuid(),
    userFeedback: faker.lorem.text(),
    widgetMetadataUrl: 'https://www.roomyledger.com/login',
    clientIp: faker.internet.ip(),
    clientSubdomain: 'roomyledger',
    productId: faker.string.uuid(),
    widgetMetadataType: 'BUG_REPORT',
    widgetMetadataTimezone: 'Europe/Dublin',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    submittedAt: new Date().toISOString(),
  });

  handleAction() {
    throw new Error('Method not implemented.');
  }

  open(feedbackId: string) {
    console.log('Opening feedback submission view dialog for ID:', feedbackId);
    this.visible.set(true);
  }

  close() {
    this.visible.set(false);
  }

  saveChanges() {
    this.close();
  }

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
    // In a real app, you might want to show a toast notification
    console.log('Copied to clipboard:', text);
  }
}
