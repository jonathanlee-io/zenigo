import {TestHelpersUtil} from '@app/util';
import {faker} from '@faker-js/faker/locale/en';
import {
  BadRequestException,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import {Mocked, TestBed} from '@suites/unit';

import {ClientsService} from './clients.service';
import {CreateClientDto} from '../../dto/CreateClient.dto';
import {ClientsRepositoryService} from '../../repositories/clients-repository/clients-repository.service';

describe('ClientsService', () => {
  let service: ClientsService;
  let mockClientsRepository: Mocked<ClientsRepositoryService>;
  let mockLogger: Mocked<Logger>;

  beforeEach(async () => {
    const {unit, unitRef} = await TestBed.solitary(ClientsService).compile();
    service = unit;
    mockClientsRepository = unitRef.get<ClientsRepositoryService>(
      ClientsRepositoryService,
    );
    mockLogger = unitRef.get<Logger>(Logger);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(mockClientsRepository).toBeDefined();
    expect(mockLogger).toBeDefined();
  });

  it('should throw bad request exception if client subdomain is not available', async () => {
    const mockUser = TestHelpersUtil.createMockRequestingUser();
    const mockCreateClientDto: CreateClientDto =
      TestHelpersUtil.createMockCreateClientDto();

    mockClientsRepository.isExistsSubdomain.mockResolvedValue(true);
    mockClientsRepository.getClientsWhereUserInvolved.mockResolvedValue([]);

    await expect(
      service.createClient(mockUser.email, mockCreateClientDto),
    ).rejects.toThrow(new BadRequestException('Subdomain already exists'));
  });

  it('should throw internal server error if any element fails to create', async () => {
    const mockUser = TestHelpersUtil.createMockRequestingUser();
    const mockCreateClientDto = TestHelpersUtil.createMockCreateClientDto();

    mockClientsRepository.isExistsSubdomain.mockResolvedValue(false);
    mockClientsRepository.getClientsWhereUserInvolved.mockResolvedValue([]);
    mockClientsRepository.registerNewClientWithTransaction.mockResolvedValue({
      createdClient: null,
      createdSubdomain: null,
      createdProject: null,
    });

    await expect(
      service.createClient(mockUser.email, mockCreateClientDto),
    ).rejects.toThrow(new InternalServerErrorException());
  });

  it('should create new client', async () => {
    const mockUser = TestHelpersUtil.createMockRequestingUser();
    const mockCreateClientDto = TestHelpersUtil.createMockCreateClientDto();
    const clientId = faker.string.uuid();

    mockClientsRepository.getClientsWhereUserInvolved.mockResolvedValue([]);
    mockClientsRepository.registerNewClientWithTransaction.mockResolvedValue({
      createdClient: {
        id: clientId,
      },
      createdSubdomain: {},
      createdProject: {},
      createdProduct: {},
    } as any);

    const result = await service.createClient(
      mockUser.email,
      mockCreateClientDto,
    );

    expect(result.isSuccessful).toBe(true);
    expect(result.clientId).toStrictEqual(clientId);
  });
});
