import {jestIntegrationTestTimeout} from '@app/constants';
import {PrismaModule} from '@app/database';
import {TestHelpersUtil} from '@app/util';
import {CacheModule} from '@nestjs/cache-manager';
import {ConfigModule} from '@nestjs/config';
import {Test, TestingModule} from '@nestjs/testing';
import {StartedPostgreSqlContainer} from '@testcontainers/postgresql';
import {Client} from 'pg';

import {ClientsRepositoryService} from './clients-repository.service';
import {PrismaClient as IdentityPrismaClient} from '../../../../../generated/client';
import {IDENTITY_PRISMA} from '../../../../config/db.config';
import {ClientsModule} from '../../clients.module';

describe('ClientsRepositoryService', () => {
  jest.setTimeout(jestIntegrationTestTimeout);

  let repository: ClientsRepositoryService;
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
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        await ConfigModule.forRoot({
          isGlobal: true,
        }),
        PrismaModule.register(
          {client: IdentityPrismaClient},
          {injectionKey: IDENTITY_PRISMA},
        ),
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
