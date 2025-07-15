import {TestBed} from '@suites/unit';

import {SubdomainRepository} from './subdomain.repository';

describe('SubdomainRepository', () => {
  let repository: SubdomainRepository;

  beforeEach(async () => {
    const {unit} = await TestBed.solitary(SubdomainRepository).compile();
    repository = unit;
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });
});
