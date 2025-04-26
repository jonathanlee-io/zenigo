import {INestApplication} from '@nestjs/common';
import {Test, TestingModule} from '@nestjs/testing';

import {FeatureFlagServiceModule} from '../src/app/feature-flag-service.module';

describe('FeedbackServiceApiController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [FeatureFlagServiceModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });
});
