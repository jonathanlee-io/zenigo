import {TestBed} from '@suites/unit';

import {AnonymousUsersController} from './anonymous-users.controller';

describe('AnonymousUsersController', () => {
  let controller: AnonymousUsersController;

  beforeEach(async () => {
    const {unit} = await TestBed.solitary(AnonymousUsersController).compile();
    controller = unit;
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
