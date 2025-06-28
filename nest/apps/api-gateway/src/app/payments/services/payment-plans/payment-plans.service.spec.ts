import {TestBed} from '@suites/unit';

import {PaymentPlansService} from './payment-plans.service';

describe('PaymentPlansService', () => {
  let service: PaymentPlansService;

  beforeEach(async () => {
    const {unit} = await TestBed.solitary(PaymentPlansService).compile();
    service = unit;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
