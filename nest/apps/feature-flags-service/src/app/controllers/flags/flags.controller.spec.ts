import {TestBed} from '@suites/unit';

import {FlagsController} from './flags.controller';

describe('FlagsController', () => {
  let controller: FlagsController;

  beforeEach(async () => {
    const {unit} = await TestBed.solitary(FlagsController).compile();
    controller = unit;
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
