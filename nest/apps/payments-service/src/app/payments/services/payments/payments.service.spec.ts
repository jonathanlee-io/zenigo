import {TestBed} from '@suites/unit';

import {PaymentsService} from './payments.service';

describe('PaymentsService', () => {
  let service: PaymentsService;

  beforeEach(async () => {
    const {unit} = await TestBed.solitary(PaymentsService).compile();

    service = unit;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
