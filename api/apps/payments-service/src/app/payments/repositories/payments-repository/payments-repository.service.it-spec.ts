import {jestIntegrationTestTimeout} from '@app/constants';
import {TestHelpersUtil} from '@app/util';
import {Test, TestingModule} from '@nestjs/testing';
import {StartedPostgreSqlContainer} from '@testcontainers/postgresql';
import {Client} from 'pg';

import {PaymentsRepositoryService} from './payments-repository.service';
import {PaymentsModule} from '../../payments.module';

describe('PaymentsRepositoryService', () => {
  jest.setTimeout(jestIntegrationTestTimeout);

  let repository: PaymentsRepositoryService;
  let postgresContainer: StartedPostgreSqlContainer;
  let postgresClient: Client;

  beforeAll(async () => {
    const {initializedPostgresContainer, initializedPostgresClient} =
      await TestHelpersUtil.initializePostgresTestContainer({
        databaseUrlKey: 'PAYMENTS_DATABASE_URL',
        schemaOverride: './apps/payments-service/prisma/schema.prisma',
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
    process.env['DATABASE_URL'] = postgresContainer.getConnectionUri();
    const module: TestingModule = await Test.createTestingModule({
      imports: [PaymentsModule],
    }).compile();

    repository = module.get<PaymentsRepositoryService>(
      PaymentsRepositoryService,
    );
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });
});
