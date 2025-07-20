import {TestBed} from '@suites/unit';

import {ClientsService} from './clients.service';

describe('ClientsService', () => {
  let service: ClientsService;

  beforeEach(async () => {
    const {unit} = await TestBed.solitary(ClientsService).compile();
    service = unit;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
