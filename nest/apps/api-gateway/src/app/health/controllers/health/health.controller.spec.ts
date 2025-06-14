import {TestBed} from '@suites/unit';

import {HealthController} from './health.controller';

describe('HealthController', () => {
  let controller: HealthController;

  beforeEach(async () => {
    const {unit} = await TestBed.solitary(HealthController).compile();
    controller = unit;
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
