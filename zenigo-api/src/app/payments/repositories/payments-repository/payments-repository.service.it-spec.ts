import {CacheModule} from '@nestjs/cache-manager';
import {Logger} from '@nestjs/common';
import {Test, TestingModule} from '@nestjs/testing';
import {StartedPostgreSqlContainer} from '@testcontainers/postgresql';
import {Client} from 'pg';

import {PaymentsRepositoryService} from './payments-repository.service';
import {jestIntegrationTestTimeout} from '../../../../lib/constants/testing/integration-testing.constants';
import {PrismaModule} from '../../../../lib/prisma/prisma.module';
import {
  initializePostgresTestContainer,
  tearDownPostgresTestContainer,
} from '../../../../lib/util/tests.helpers.util';
import {PaymentsModule} from '../../payments.module';

describe('PaymentsRepositoryService', () => {
  jest.setTimeout(jestIntegrationTestTimeout);

  let repository: PaymentsRepositoryService;
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
      imports: [PrismaModule, CacheModule.register(), PaymentsModule],
      providers: [
        {
          provide: Logger,
          useFactory: () => new Logger('test'),
        },
        PaymentsRepositoryService,
      ],
    }).compile();

    repository = module.get<PaymentsRepositoryService>(
      PaymentsRepositoryService,
    );
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });
});
