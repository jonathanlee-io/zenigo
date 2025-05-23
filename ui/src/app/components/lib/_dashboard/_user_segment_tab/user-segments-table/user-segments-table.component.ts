import {Component, inject, input, ViewContainerRef} from '@angular/core';

import {TimeAgoDatePipe} from '../../../../../pipes/time-ago-date.pipe';
import {UserSegmentEditDialogComponent} from '../user-segment-edit-dialog/user-segment-edit-dialog.component';

export interface UserSegment {
  id: string;
  key: string;
  description: string;
  userCount: number;
  creationDate: Date;
}

@Component({
  selector: 'app-user-segments-table',
  imports: [
    TimeAgoDatePipe,
  ],
  templateUrl: './user-segments-table.component.html',
  styleUrl: './user-segments-table.component.scss',
})
export class UserSegmentsTableComponent {
  userSegments = input.required<UserSegment[]>();

  private readonly viewContainerRef = inject(ViewContainerRef);

  openUserSegmentEditDialog(userSegmentId: string) {
    const componentRef = this.viewContainerRef.createComponent(UserSegmentEditDialogComponent);
    componentRef.instance.open(userSegmentId);
  }
}
