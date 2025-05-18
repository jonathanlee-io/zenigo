import {Test, TestingModule} from '@nestjs/testing';

import {AuthenticatedUsersService} from './authenticated-users.service';

describe('AuthenticatedUsersService', () => {
  let service: AuthenticatedUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthenticatedUsersService],
    }).compile();

    service = module.get<AuthenticatedUsersService>(AuthenticatedUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
