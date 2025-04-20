import {NgClass} from '@angular/common';
import {Component, inject} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {DragDropModule} from 'primeng/dragdrop';

import {DemoStore} from '../../../../+state/demo/demo.store';
import {IssueSectionComponent} from '../issue-section/issue-section.component';

@Component({
  selector: 'app-full-issue-board',
  standalone: true,
  imports: [IssueSectionComponent, DragDropModule, NgClass, ButtonModule],
  templateUrl: './full-issue-board.component.html',
  styleUrl: './full-issue-board.component.scss',
})
export class FullIssueBoardComponent {
  protected readonly demoStore = inject(DemoStore);
  startDate: string = new Date().toLocaleDateString();

  updateActiveAssignee(assignee: string) {
    if (assignee == this.demoStore.currentlyFilteredAssignee()) {
      assignee = '*';
    }
    this.demoStore.updateVisibilityOnAssigneeUpdate(assignee);
  }

  protected readonly String = String;
}
