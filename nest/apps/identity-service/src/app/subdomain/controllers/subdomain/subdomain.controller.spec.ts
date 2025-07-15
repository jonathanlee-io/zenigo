import {TestBed} from '@suites/unit';

import {SubdomainController} from './subdomain.controller';

describe('SubdomainController', () => {
  let controller: SubdomainController;

  beforeEach(async () => {
    const {unit} = await TestBed.solitary(SubdomainController).compile();
    controller = unit;
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
