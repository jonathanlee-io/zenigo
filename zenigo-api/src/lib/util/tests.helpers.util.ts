import {faker} from '@faker-js/faker/locale/en';
import {
  PostgreSqlContainer,
  StartedPostgreSqlContainer,
} from '@testcontainers/postgresql';
import {Client} from 'pg';

import {HelpersUtil} from './helpers.util';
import {CreateClientDto} from '../../app/clients/dto/CreateClient.dto';

export class TestHelpersUtil {
  static async initializePostgresTestContainer() {
    const initializedPostgresContainer =
      await new PostgreSqlContainer().start();
    const initializedPostgresClient = new Client({
      connectionString: initializedPostgresContainer.getConnectionUri(),
    });
    await initializedPostgresClient.connect();
    await HelpersUtil.runPrismaMigrations(
      initializedPostgresContainer.getConnectionUri(),
    );
    return {initializedPostgresContainer, initializedPostgresClient};
  }

  static async tearDownPostgresTestContainer(
    postgresContainer: StartedPostgreSqlContainer,
    postgresClient: Client,
  ) {
    await postgresClient.end();
    await HelpersUtil.delayedAction(async () => {
      await postgresContainer.stop();
    });
  }

  static createMockRequestingUser(overrides?: {
    userSubjectId?: string;
    email?: string;
  }) {
    return {
      userSubjectId: overrides?.userSubjectId ?? faker.string.uuid(),
      email: overrides?.email ?? faker.internet.email(),
    };
  }

  static createMockCreateClientDto(overrides?: {
    clientDisplayName?: string;
    projectDisplayName?: string;
    subdomain?: string;
    isBugReportsEnabled?: boolean;
    isFeatureRequestsEnabled?: boolean;
    isFeatureFeedbackEnabled?: boolean;
  }): CreateClientDto {
    return {
      clientDisplayName:
        overrides?.clientDisplayName ?? faker.internet.displayName(),
      projectDisplayName:
        overrides?.projectDisplayName ?? faker.animal.petName(),
      subdomain:
        overrides?.subdomain ?? faker.internet.domainName().split('.')[0],
      isBugReportsEnabled: overrides?.isBugReportsEnabled ?? true,
      isFeatureRequestsEnabled: overrides?.isFeatureRequestsEnabled ?? true,
      isFeatureFeedbackEnabled: overrides?.isFeatureFeedbackEnabled ?? true,
    };
  }
}
