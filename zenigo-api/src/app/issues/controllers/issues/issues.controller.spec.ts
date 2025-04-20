import {TestBed} from '@suites/unit';

import {IssuesController} from './issues.controller';

describe('IssuesController', () => {
  let controller: IssuesController;

  beforeEach(async () => {
    const {unit} = await TestBed.solitary(IssuesController).compile();
    controller = unit;
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
