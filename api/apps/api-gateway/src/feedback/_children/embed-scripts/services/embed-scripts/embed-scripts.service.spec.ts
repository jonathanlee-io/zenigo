import { Test, TestingModule } from '@nestjs/testing';
import { EmbedScriptsService } from './embed-scripts.service';

describe('EmbedScriptsService', () => {
  let service: EmbedScriptsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmbedScriptsService],
    }).compile();

    service = module.get<EmbedScriptsService>(EmbedScriptsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
