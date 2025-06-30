import {TestBed} from '@suites/unit';

import {StripeService} from './stripe.service';

describe('StripeService', () => {
  let service: StripeService;

  beforeEach(async () => {
    const {unit} = await TestBed.solitary(StripeService).compile();
    service = unit;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
