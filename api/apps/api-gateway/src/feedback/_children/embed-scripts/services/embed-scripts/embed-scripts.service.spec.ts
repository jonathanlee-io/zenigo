import {TestBed} from '@suites/unit';

import {EmbedScriptsService} from './embed-scripts.service';

describe('EmbedScriptsService', () => {
  let service: EmbedScriptsService;

  beforeEach(async () => {
    const {unit} = await TestBed.solitary(EmbedScriptsService).compile();

    service = unit;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
