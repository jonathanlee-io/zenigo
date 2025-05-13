import {Component, input} from '@angular/core';

import {ProductFeedbackSubmissionDto} from '../../../../../dtos/projects/ProductFeedbackSubmissionDto';
import {TimeAgoDatePipe} from '../../../../../pipes/time-ago-date.pipe';

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

  openFeedbackViewDialog(feedbackId: string) {
    console.log(feedbackId);
  }
}
