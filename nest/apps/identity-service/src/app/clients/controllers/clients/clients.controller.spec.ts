import {Mocked, TestBed} from '@suites/unit';

import {ClientsController} from './clients.controller';
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
});
