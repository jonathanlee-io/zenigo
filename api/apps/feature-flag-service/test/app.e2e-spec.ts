import {e2eTestTimeout} from '@app/constants/testing/integration-testing.constants';
import {initApp} from '@app/init/init-app';
import {TestHelpersUtil} from '@app/util/tests.helpers.util';
import {faker} from '@faker-js/faker/locale/en';
import {HttpStatus, INestApplication} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import {Test, TestingModule} from '@nestjs/testing';
import {StartedPostgreSqlContainer} from '@testcontainers/postgresql';
import {Client} from 'pg';
import * as request from 'supertest';

import {FeatureFlagServiceModule} from '../src/app/feature-flag-service.module';

describe('AppController (e2e)', () => {
  jest.setTimeout(e2eTestTimeout);

  let app: INestApplication;
  let postgresContainer: StartedPostgreSqlContainer;
  let postgresClient: Client;
  let accessToken: string;

  const testJwtSecret = faker.string.uuid();
  const mockUser = TestHelpersUtil.createMockRequestingUser();

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
    process.env['JWT_SECRET'] = testJwtSecret;
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [FeatureFlagServiceModule],
    }).compile();

    app = moduleFixture.createNestApplication();

    initApp(app);

    accessToken = app
      .get<JwtService>(JwtService)
      .sign(
        {sub: mockUser.userSubjectId, email: mockUser.email},
        {secret: testJwtSecret},
      );

    await app.init();
    await app.listen(3000);
  });

  afterEach(async () => {
    await app.close();
  });

  it('/v1/clients/create [POST]', async () => {
    const payload = TestHelpersUtil.createMockCreateClientDto();

    await request(app.getHttpServer())
      .post('/v1/users/authenticated/check-in')
      .send(payload)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(HttpStatus.OK)
      .then((response) => {
        console.log(response.body);
      });

    return request(app.getHttpServer())
      .post('/v1/clients/create')
      .send(payload)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(HttpStatus.CREATED)
      .then((response) => {
        console.log(response.body);
      });
  });
});
