import {Test, TestingModule} from '@nestjs/testing';
import {StartedPostgreSqlContainer} from '@testcontainers/postgresql';
import {Client} from 'pg';

import {UsersRepositoryService} from './users-repository.service';
import {jestIntegrationTestTimeout} from '../../../../src/lib/constants/testing/integration-testing.constants';
import {PrismaModule} from '../../../../src/lib/prisma/prisma.module';
import {
  initializePostgresTestContainer,
  tearDownPostgresTestContainer,
} from '../../../../src/lib/util/tests.helpers.util';

describe('UsersRepositoryService', () => {
  jest.setTimeout(jestIntegrationTestTimeout);

  let repository: UsersRepositoryService;
  let postgresContainer: StartedPostgreSqlContainer;
  let postgresClient: Client;

  beforeAll(async () => {
    const {initializedPostgresContainer, initializedPostgresClient} =
      await initializePostgresTestContainer();
    postgresContainer = initializedPostgresContainer;
    postgresClient = initializedPostgresClient;
  });

  afterAll(async () => {
    await tearDownPostgresTestContainer(postgresContainer, postgresClient);
  });

  beforeEach(async () => {
    process.env['DATABASE_URL'] = postgresContainer.getConnectionUri();
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [UsersRepositoryService],
    }).compile();

    repository = module.get<UsersRepositoryService>(UsersRepositoryService);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });
});
