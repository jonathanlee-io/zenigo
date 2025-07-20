import {TestBed} from '@suites/unit';

import {ClientsController} from './clients.controller';

describe('ClientsController', () => {
  let controller: ClientsController;

  beforeEach(async () => {
    const {unit} = await TestBed.solitary(ClientsController).compile();
    controller = unit;
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
