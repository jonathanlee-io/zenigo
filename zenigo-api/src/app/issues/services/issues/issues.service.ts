import {Injectable} from '@nestjs/common';

import {IssuesRepositoryService} from '../../repositories/issues-repository/issues-repository.service';

@Injectable()
export class IssuesService {
  constructor(private readonly issuesRepository: IssuesRepositoryService) {}
}
