import {Mocked, TestBed} from '@suites/unit';

import {ProjectsController} from './projects.controller';
import {ProjectsService} from '../../services/projects/projects.service';

describe('ProjectsController', () => {
  let controller: ProjectsController;
  let mockProjectsService: Mocked<ProjectsService>;

  beforeEach(async () => {
    const {unit, unitRef} =
      await TestBed.solitary(ProjectsController).compile();

    controller = unit;
    mockProjectsService = unitRef.get<ProjectsService>(ProjectsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(mockProjectsService).toBeDefined();
  });
});
