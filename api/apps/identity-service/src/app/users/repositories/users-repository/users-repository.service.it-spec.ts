import {jestIntegrationTestTimeout} from '@app/constants';
import {PrismaModule} from '@app/database';
import {TestHelpersUtil} from '@app/util';
import {Test, TestingModule} from '@nestjs/testing';
import {StartedPostgreSqlContainer} from '@testcontainers/postgresql';
import {Client} from 'pg';

import {UsersRepositoryService} from './users-repository.service';
import {PrismaClient as IdentityPrismaClient} from '../../../../../generated/client';

describe('UsersRepositoryService', () => {
  jest.setTimeout(jestIntegrationTestTimeout);

  let repository: UsersRepositoryService;
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
      imports: [PrismaModule.register({client: IdentityPrismaClient})],
      providers: [UsersRepositoryService],
    }).compile();

    repository = module.get<UsersRepositoryService>(UsersRepositoryService);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });
});
