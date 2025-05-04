import {Dto} from '../Dto';

export interface IssueDto extends Dto {
  title: string;
  iconClass: string;
  type: string;
  color: string;
  assignee: string;
  createdAt: string;
  dueDate: string;
  isVisible: boolean;
  epicTitle: string;
}
