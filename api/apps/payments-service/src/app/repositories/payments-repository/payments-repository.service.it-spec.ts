import {jestIntegrationTestTimeout} from '@app/constants';
import {PrismaModule} from '@app/database';
import {TestHelpersUtil} from '@app/util';
import {CacheModule} from '@nestjs/cache-manager';
import {Logger} from '@nestjs/common';
import {Test, TestingModule} from '@nestjs/testing';
import {StartedPostgreSqlContainer} from '@testcontainers/postgresql';
import {Client} from 'pg';

import {PaymentsRepositoryService} from './payments-repository.service';
import {PaymentsServiceModule} from '../../payments-service.module';

describe('PaymentsRepositoryService', () => {
  jest.setTimeout(jestIntegrationTestTimeout);

  let repository: PaymentsRepositoryService;
  let postgresContainer: StartedPostgreSqlContainer;
  let postgresClient: Client;

  beforeAll(async () => {
    const {initializedPostgresContainer, initializedPostgresClient} =
      await TestHelpersUtil.initializePostgresTestContainer();
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
      imports: [PrismaModule, CacheModule.register(), PaymentsServiceModule],
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
