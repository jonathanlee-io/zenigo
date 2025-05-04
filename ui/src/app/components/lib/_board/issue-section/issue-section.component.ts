import {NgIf} from '@angular/common';
import {Component, inject, input} from '@angular/core';
import {DragDropModule} from 'primeng/dragdrop';

import {DemoStore} from '../../../../+state/demo/demo.store';
import {IssueDto} from '../../../../dtos/issues/Issue.dto';
import {IssueCardComponent} from '../issue-card/issue-card.component';

@Component({
  selector: 'app-issue-section',
  standalone: true,
  imports: [IssueCardComponent, DragDropModule, NgIf],
  templateUrl: './issue-section.component.html',
  styleUrl: './issue-section.component.scss',
})
export class IssueSectionComponent {
  title = input.required<string>();
  issues = input.required<IssueDto[]>();
  sectionId = input.required<string>();
  protected readonly demoStore = inject(DemoStore);
}
