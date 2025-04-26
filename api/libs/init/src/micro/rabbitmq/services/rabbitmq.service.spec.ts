import {TestBed} from '@suites/unit';

import {RabbitmqService} from './rabbitmq.service';

describe('RabbitmqService', () => {
  let service: RabbitmqService;

  beforeEach(async () => {
    const {unit} = await TestBed.solitary(RabbitmqService).compile();

    service = unit;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
