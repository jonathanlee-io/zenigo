import {e2eTestTimeout} from '@app/constants';
import {TestHelpersUtil} from '@app/util';
import {INestApplication} from '@nestjs/common';
import {Test, TestingModule} from '@nestjs/testing';
import {StartedPostgreSqlContainer} from '@testcontainers/postgresql';
import {Client} from 'pg';

import {IdentityServiceModule} from '../src/app/identity-service.module';

describe('FeedbackServiceApiController (e2e)', () => {
  jest.setTimeout(e2eTestTimeout);

  let app: INestApplication;
  let postgresContainer: StartedPostgreSqlContainer;
  let postgresClient: Client;

  beforeAll(async () => {
    const {initializedPostgresContainer, initializedPostgresClient} =
      await TestHelpersUtil.initializePostgresTestContainer({
        databaseUrlKey: 'IDENTITY_DATABASE_URL',
        schemaOverride: './apps/identity-service/prisma/schema.prisma',
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
    process.env['IDENTITY_DATABASE_URL'] = postgresContainer.getConnectionUri();
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [IdentityServiceModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should be defined', () => {
    expect(app).toBeDefined();
  });
});
