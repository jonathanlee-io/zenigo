import {NgClass} from '@angular/common';
import {Component, input} from '@angular/core';
import {TagModule} from 'primeng/tag';

import {IssueDto} from '../../../../dtos/issues/Issue.dto';

@Component({
  selector: 'app-issue-card',
  standalone: true,
  imports: [NgClass, TagModule],
  templateUrl: './issue-card.component.html',
  styleUrl: './issue-card.component.scss',
})
export class IssueCardComponent {
  issue = input.required<IssueDto>();
}
