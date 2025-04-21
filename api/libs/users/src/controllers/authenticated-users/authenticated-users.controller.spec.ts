import {faker} from '@faker-js/faker/locale/en';
import {Mocked, TestBed} from '@suites/unit';

import {AuthenticatedUsersController} from './authenticated-users.controller';
import {AuthenticatedUsersService} from '../../services/authenticated-users/authenticated-users.service';

describe('AuthenticatedUsersController', () => {
  let controller: AuthenticatedUsersController;
  let mockAuthenticatedUserService: Mocked<AuthenticatedUsersService>;

  beforeEach(async () => {
    const {unit, unitRef} = await TestBed.solitary(
      AuthenticatedUsersController,
    ).compile();

    controller = unit;
    mockAuthenticatedUserService = unitRef.get<AuthenticatedUsersService>(
      AuthenticatedUsersService,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(mockAuthenticatedUserService).toBeDefined();
  });

  it('should check in with requesting user ID and e-mail', async () => {
    const requestingUserId = faker.string.uuid();
    const requestingUserEmail = faker.internet.email();

    mockAuthenticatedUserService.checkIn.mockResolvedValue({
      isSuccessful: true,
      isCreatedNew: true,
    });

    const result = await controller.checkIn({
      requestingUserId,
      requestingUserEmail,
    } as never);

    expect(result).toStrictEqual({isSuccessful: true, isCreatedNew: true});
  });
});
