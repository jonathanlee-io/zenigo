import {Test, TestingModule} from '@nestjs/testing';

import {EmbedScriptsController} from './embed-scripts.controller';

describe('EmbedScriptsController', () => {
  let controller: EmbedScriptsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmbedScriptsController],
    }).compile();

    controller = module.get<EmbedScriptsController>(EmbedScriptsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
