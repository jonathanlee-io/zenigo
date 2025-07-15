import {TestBed} from '@suites/unit';

import {SubdomainService} from './subdomain.service';

describe('SubdomainRepository', () => {
  let service: SubdomainService;

  beforeEach(async () => {
    const {unit} = await TestBed.solitary(SubdomainService).compile();
    service = unit;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
