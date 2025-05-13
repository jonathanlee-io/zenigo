import {Component, ComponentRef, inject, input, ViewContainerRef} from '@angular/core';

import {ProductFeedbackSubmissionDto} from '../../../../../dtos/projects/ProductFeedbackSubmissionDto';
import {TimeAgoDatePipe} from '../../../../../pipes/time-ago-date.pipe';
import {FeedbackExportDialogComponent} from '../feedback-export-dialog/feedback-export-dialog.component';
import {FeedbackViewDialogComponent} from '../feedback-view-dialog/feedback-view-dialog.component';

export interface FeedbackSubmission {
  id: string;
  feedback: string;
  sourceUrl: string;
  creationDate: Date;
}

@Component({
  selector: 'app-feedback-table',
  imports: [
    TimeAgoDatePipe,
  ],
  templateUrl: './feedback-table.component.html',
  styleUrl: './feedback-table.component.scss',
})
export class FeedbackTableComponent {
  productFeedbackSubmissions = input.required<ProductFeedbackSubmissionDto[]>();

  private readonly viewContainerRef = inject(ViewContainerRef);
  private readonly feedbackViewDialog: ComponentRef<FeedbackViewDialogComponent>;
  private readonly feedbackExportDialog: ComponentRef<FeedbackExportDialogComponent>;

  constructor() {
    this.feedbackViewDialog = this.viewContainerRef.createComponent(FeedbackViewDialogComponent);
    this.feedbackExportDialog = this.viewContainerRef.createComponent(FeedbackExportDialogComponent);
  }

  openFeedbackViewDialog(feedbackId: string) {
    console.log(feedbackId);
    this.feedbackViewDialog.instance.open(feedbackId);
  }

  openFeedbackExportDialog() {
    this.feedbackExportDialog.instance.open();
  }
}
