import {Mocked, TestBed} from '@suites/unit';

import {EmbedScriptsController} from './embed-scripts.controller';
import {ProjectsService} from '../../../projects/services/projects/projects.service';

describe('EmbedScriptsController', () => {
  let controller: EmbedScriptsController;
  let mockProjectsService: Mocked<ProjectsService>;

  beforeEach(async () => {
    const {unit, unitRef} = await TestBed.solitary(
      EmbedScriptsController,
    ).compile();

    controller = unit;
    mockProjectsService = unitRef.get<ProjectsService>(ProjectsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(mockProjectsService).toBeDefined();
  });
});
