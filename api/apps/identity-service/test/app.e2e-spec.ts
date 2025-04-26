import {INestApplication} from '@nestjs/common';
import {Test, TestingModule} from '@nestjs/testing';

import {IdentityServiceModule} from '../src/app/identity-service.module';

describe('IdentityServiceController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [IdentityServiceModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });
});
