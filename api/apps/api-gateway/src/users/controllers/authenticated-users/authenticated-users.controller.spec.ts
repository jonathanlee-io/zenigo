import { Test, TestingModule } from '@nestjs/testing';
import { AuthenticatedUsersController } from './authenticated-users.controller';

describe('AuthenticatedUsersController', () => {
  let controller: AuthenticatedUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthenticatedUsersController],
    }).compile();

    controller = module.get<AuthenticatedUsersController>(AuthenticatedUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
