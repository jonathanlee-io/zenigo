import {Logger} from '@nestjs/common';
import {Mocked, TestBed} from '@suites/unit';

import {ClientsService} from './clients.service';
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
});
