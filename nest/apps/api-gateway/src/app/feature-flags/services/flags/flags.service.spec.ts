import {TestBed} from '@suites/unit';

import {FlagsService} from './flags.service';

describe('FlagsService', () => {
  let service: FlagsService;

  beforeEach(async () => {
    const {unit} = await TestBed.solitary(FlagsService).compile();
    service = unit;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
