import {TestBed} from '@suites/unit';

import {AuthenticatedUsersService} from './authenticated-users.service';

describe('AuthenticatedUsersService', () => {
  let service: AuthenticatedUsersService;

  beforeEach(async () => {
    const {unit} = await TestBed.solitary(AuthenticatedUsersService).compile();

    service = unit;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
