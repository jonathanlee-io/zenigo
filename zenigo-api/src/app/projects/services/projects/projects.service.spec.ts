import {TestBed} from '@suites/unit';

import {ProjectsService} from './projects.service';

describe('ProjectsService', () => {
  let service: ProjectsService;

  beforeEach(async () => {
    const {unit} = await TestBed.solitary(ProjectsService).compile();

    service = unit;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
