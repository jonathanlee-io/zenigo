import {faker} from '@faker-js/faker/locale/en';
import {HttpStatus} from '@nestjs/common';
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
      status: HttpStatus.OK,
      data: {
        isSuccessful: true,
        isCreatedNew: true,
      },
    });

    const result = await controller.checkIn({
      clientIp: faker.internet.ip(),
      clientSubdomain: faker.internet.domainName(),
      data: null as never,
      authenticatedUser: {
        id: requestingUserId,
        email: requestingUserEmail,
      },
    });

    expect(result).toStrictEqual({
      status: HttpStatus.OK,
      data: {isSuccessful: true, isCreatedNew: true},
    });
  });
});
