import {Component, inject, input, ViewContainerRef} from '@angular/core';

import {ProductFeedbackSubmissionDto} from '../../../../../dtos/projects/ProductFeedbackSubmissionDto';
import {TimeAgoDatePipe} from '../../../../../pipes/time-ago-date.pipe';
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

  openFeedbackViewDialog(feedbackId: string) {
    console.log(feedbackId);
    const componentRef = this.viewContainerRef.createComponent(FeedbackViewDialogComponent);
    componentRef.instance.open(feedbackId);
  }
}
