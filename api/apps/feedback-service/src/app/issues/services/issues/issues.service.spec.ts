import {TestBed} from '@suites/unit';

import {IssuesService} from './issues.service';

describe('IssuesService', () => {
  let service: IssuesService;

  beforeEach(async () => {
    const {unit} = await TestBed.solitary(IssuesService).compile();
    service = unit;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
