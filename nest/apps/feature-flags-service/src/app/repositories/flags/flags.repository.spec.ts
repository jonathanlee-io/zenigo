import {TestBed} from '@suites/unit';

import {FlagsRepository} from './flags.repository';

describe('FlagsRepository', () => {
  let repository: FlagsRepository;

  beforeEach(async () => {
    const {unit} = await TestBed.solitary(FlagsRepository).compile();
    repository = unit;
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });
});
