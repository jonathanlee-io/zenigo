import {TestBed} from '@suites/unit';

import {ProductsRepositoryService} from './products-repository.service';

describe('ProductsRepositoryService', () => {
  let repository: ProductsRepositoryService;

  beforeEach(async () => {
    const {unit} = await TestBed.solitary(ProductsRepositoryService).compile();

    repository = unit;
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });
});
