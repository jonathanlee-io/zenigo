import {TestBed} from '@suites/unit';

import {EmbedScriptsController} from './embed-scripts.controller';

describe('EmbedScriptsController', () => {
  let controller: EmbedScriptsController;

  beforeEach(async () => {
    const {unit} = await TestBed.solitary(EmbedScriptsController).compile();

    controller = unit;
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
