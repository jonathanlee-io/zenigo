import {INestApplication} from '@nestjs/common';
import {Test, TestingModule} from '@nestjs/testing';

import {PaymentsServiceModule} from '../src/app/payments-service.module';

describe('PaymentsServiceController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [PaymentsServiceModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should be defined', () => {
    expect(app).toBeDefined();
  });
});
