import {Controller} from '@nestjs/common';

import {IssuesService} from '../../services/issues/issues.service';

@Controller()
export class IssuesController {
  constructor(private readonly issuesService: IssuesService) {}
}
