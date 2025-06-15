import {TestBed} from '@suites/unit';

import {AnonymousUsersService} from './anonymous-users.service';

describe('AnonymousUsersService', () => {
  let service: AnonymousUsersService;

  beforeEach(async () => {
    const {unit} = await TestBed.solitary(AnonymousUsersService).compile();
    service = unit;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
