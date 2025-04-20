import {TestBed} from '@suites/unit';

import {ProductsController} from './products.controller';

describe('ProductsController', () => {
  let controller: ProductsController;

  beforeEach(async () => {
    const {unit} = await TestBed.solitary(ProductsController).compile();

    controller = unit;
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
