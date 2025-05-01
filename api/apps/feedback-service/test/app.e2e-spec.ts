import {e2eTestTimeout} from '@app/constants';
import {TestHelpersUtil} from '@app/util';
import {INestApplication} from '@nestjs/common';
import {Test, TestingModule} from '@nestjs/testing';
import {StartedPostgreSqlContainer} from '@testcontainers/postgresql';
import {Client} from 'pg';

import {FeedbackServiceModule} from '../src/app/feedback-service.module';

/*
 * TODO: Re-enable this test.
 * For some reason the database connection URI from the container for ONLY this service,
 * and ONLY in GitHub actions workflow is defaulting to localhost:5432 as opposed to the
 * usual TestContainers random 5-digit port number.
 */
xdescribe('FeedbackServiceApiController (e2e)', () => {
  jest.setTimeout(e2eTestTimeout);

  let app: INestApplication;
  let postgresContainer: StartedPostgreSqlContainer;
  let postgresClient: Client;

  beforeAll(async () => {
    const {initializedPostgresContainer, initializedPostgresClient} =
      await TestHelpersUtil.initializePostgresTestContainer({
        databaseUrlKey: 'FEEDBACK_DATABASE_URL',
        schemaOverride: './apps/feedback-service/prisma/schema.prisma',
      });
    postgresContainer = initializedPostgresContainer;
    postgresClient = initializedPostgresClient;
  });

  afterAll(async () => {
    await TestHelpersUtil.tearDownPostgresTestContainer(
      postgresContainer,
      postgresClient,
    );
  });

  beforeEach(async () => {
    process.env['FEEDBACK_DATABASE_URL'] = postgresContainer.getConnectionUri();
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [FeedbackServiceModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should be defined', () => {
    expect(app).toBeDefined();
  });
});
