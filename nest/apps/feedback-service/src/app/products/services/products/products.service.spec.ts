import {TestBed} from '@suites/unit';

import {ProductsService} from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(async () => {
    const {unit} = await TestBed.solitary(ProductsService).compile();

    service = unit;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
