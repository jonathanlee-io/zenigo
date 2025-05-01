import {jestIntegrationTestTimeout} from '@app/constants';
import {TestHelpersUtil} from '@app/util';
import {Test, TestingModule} from '@nestjs/testing';
import {StartedPostgreSqlContainer} from '@testcontainers/postgresql';
import {Client} from 'pg';

import {IssuesRepositoryService} from './issues-repository.service';
import {IssuesModule} from '../../issues.module';

describe('IssuesRepositoryService', () => {
  jest.setTimeout(jestIntegrationTestTimeout);

  let repository: IssuesRepositoryService;
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
    const module: TestingModule = await Test.createTestingModule({
      imports: [IssuesModule],
    }).compile();

    repository = module.get<IssuesRepositoryService>(IssuesRepositoryService);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });
});
