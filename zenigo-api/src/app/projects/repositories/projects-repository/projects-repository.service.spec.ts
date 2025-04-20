import {TestBed} from '@suites/unit';

import {ProjectsRepositoryService} from './projects-repository.service';

describe('ProjectsRepositoryService', () => {
  let service: ProjectsRepositoryService;

  beforeEach(async () => {
    const {unit} = await TestBed.solitary(ProjectsRepositoryService).compile();

    service = unit;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
