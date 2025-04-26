import {jestIntegrationTestTimeout} from '@app/constants';
import {PrismaModule} from '@app/database';
import {TestHelpersUtil} from '@app/util';
import {faker} from '@faker-js/faker/locale/en';
import {CacheModule} from '@nestjs/cache-manager';
import {Test, TestingModule} from '@nestjs/testing';
import {StartedPostgreSqlContainer} from '@testcontainers/postgresql';
import {Client} from 'pg';

import {ClientsRepositoryService} from './clients-repository.service';
import {PaymentsService} from '../../../../../../payments-service/src/app/payments/services/payments/payments.service';
import {PrismaClient as IdentityPrismaClient} from '../../../../../generated/client';
import {UsersRepositoryService} from '../../../users/repositories/users-repository/users-repository.service';
import {UsersModule} from '../../../users/users.module';

describe('ClientsRepositoryService', () => {
  jest.setTimeout(jestIntegrationTestTimeout);

  let repository: ClientsRepositoryService;
  let usersRepository: UsersRepositoryService;
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
        UsersModule,
      ],
    }).compile();

    repository = module.get<ClientsRepositoryService>(ClientsRepositoryService);
    usersRepository = module.get<UsersRepositoryService>(
      UsersRepositoryService,
    );
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  it('should create a client', async () => {
    const userSubjectId = faker.string.uuid();
    const userEmail = faker.internet.email();

    await usersRepository.createUserFromAuthUser(userSubjectId, userEmail);

    const result = await repository.registerNewClientWithTransaction(
      userEmail,
      faker.internet.displayName(),
      faker.animal.petName(),
      faker.internet.domainName().split('.')[0],
      PaymentsService.paymentPlans[0].id,
      {
        isBugReportsEnabled: faker.datatype.boolean(),
        isFeatureRequestsEnabled: faker.datatype.boolean(),
        isFeatureFeedbackEnabled: faker.datatype.boolean(),
      },
    );

    expect(result).toBeDefined();
  });
});
