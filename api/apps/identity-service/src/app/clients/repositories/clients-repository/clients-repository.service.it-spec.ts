import {jestIntegrationTestTimeout} from '@app/constants';
import {PrismaModule} from '@app/database';
import {TestHelpersUtil} from '@app/util';
import {CacheModule} from '@nestjs/cache-manager';
import {Test, TestingModule} from '@nestjs/testing';
import {StartedPostgreSqlContainer} from '@testcontainers/postgresql';
import {Client} from 'pg';

import {ClientsRepositoryService} from './clients-repository.service';
import {PrismaClient as IdentityPrismaClient} from '../../../../../generated/client';
import {ClientsModule} from '../../clients.module';

describe('ClientsRepositoryService', () => {
  jest.setTimeout(jestIntegrationTestTimeout);

  let repository: ClientsRepositoryService;
  let postgresContainer: StartedPostgreSqlContainer;
  let postgresClient: Client;

  beforeAll(async () => {
    const {initializedPostgresContainer, initializedPostgresClient} =
      await TestHelpersUtil.initializePostgresTestContainer(
        './apps/identity-service/prisma/schema.prisma',
      );
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
      imports: [
        PrismaModule.register({client: IdentityPrismaClient}),
        CacheModule.register(),
        ClientsModule,
      ],
    }).compile();

    repository = module.get<ClientsRepositoryService>(ClientsRepositoryService);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });
});
