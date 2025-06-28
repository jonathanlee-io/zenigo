import {TestBed} from '@suites/unit';

import {PaymentPlansController} from './payment-plans.controller';

describe('PaymentPlansController', () => {
  let controller: PaymentPlansController;

  beforeEach(async () => {
    const {unit} = await TestBed.solitary(PaymentPlansController).compile();
    controller = unit;
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
