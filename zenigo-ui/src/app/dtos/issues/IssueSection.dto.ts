import {Dto} from '../Dto';
import {IssueDto} from './Issue.dto';

export interface IssueSectionDto extends Dto {
  title: string;
  issues: IssueDto[];
}
