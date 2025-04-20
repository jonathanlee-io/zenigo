import {faker} from '@faker-js/faker/locale/en';
import {Mocked, TestBed} from '@suites/unit';

import {ClientsController} from './clients.controller';
import {CurrentUserDto} from '../../../../lib/auth/dto/CurrentUserDto';
import {
  createMockCreateClientDto,
  createMockRequestingUser,
} from '../../../../lib/util/tests.helpers.util';
import {ClientsService} from '../../services/clients/clients.service';

describe('ClientsController', () => {
  let controller: ClientsController;
  let mockClientsService: Mocked<ClientsService>;

  beforeEach(async () => {
    const {unit, unitRef} = await TestBed.solitary(ClientsController).compile();

    controller = unit;
    mockClientsService = unitRef.get<ClientsService>(ClientsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(mockClientsService).toBeDefined();
  });

  it('should register new client', async () => {
    const mockUser = createMockRequestingUser();

    const mockCreateClientDto = createMockCreateClientDto();

    mockClientsService.createClient.mockResolvedValue({
      isSuccessful: true,
      clientId: faker.string.uuid(),
      projectId: faker.string.uuid(),
    });

    const result = await controller.registerNewClient(
      {
        requestingUserId: mockUser.userSubjectId,
        requestingUserEmail: mockUser.email,
      } as unknown as CurrentUserDto,
      mockCreateClientDto,
    );

    expect(result.isSuccessful).toBe(true);
    expect(mockClientsService.createClient).toHaveBeenCalledWith(
      mockUser.email,
      mockCreateClientDto,
    );
  });

  it('should fetch is subdomain available', async () => {
    const subdomain = faker.internet.domainName().split('.')[0];

    mockClientsService.checkIfSubdomainAvailable.mockResolvedValue({
      isSubdomainAvailable: false,
      subdomain,
    });

    const result = await controller.isSubdomainAvailable({subdomain});

    expect(result.isSubdomainAvailable).toBe(false);
    expect(result.subdomain).toStrictEqual(subdomain);
    expect(mockClientsService.checkIfSubdomainAvailable).toHaveBeenCalledWith({
      subdomain,
    });
  });
});
