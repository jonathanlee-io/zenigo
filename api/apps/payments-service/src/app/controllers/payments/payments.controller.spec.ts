import {TestBed} from '@suites/unit';

import {PaymentsController} from './payments.controller';

describe('PaymentsController', () => {
  let controller: PaymentsController;

  beforeEach(async () => {
    const {unit} = await TestBed.solitary(PaymentsController).compile();

    controller = unit;
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
