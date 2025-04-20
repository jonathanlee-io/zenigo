import {faker} from '@faker-js/faker/locale/en';
import {
  PostgreSqlContainer,
  StartedPostgreSqlContainer,
} from '@testcontainers/postgresql';
import {Client} from 'pg';

import {delayedAction, runPrismaMigrations} from './helpers.util';
import {CreateClientDto} from '../../app/clients/dto/CreateClient.dto';

export const initializePostgresTestContainer = async () => {
  const initializedPostgresContainer = await new PostgreSqlContainer().start();
  const initializedPostgresClient = new Client({
    connectionString: initializedPostgresContainer.getConnectionUri(),
  });
  await initializedPostgresClient.connect();
  await runPrismaMigrations(initializedPostgresContainer.getConnectionUri());
  return {initializedPostgresContainer, initializedPostgresClient};
};

export const tearDownPostgresTestContainer = async (
  postgresContainer: StartedPostgreSqlContainer,
  postgresClient: Client,
) => {
  await postgresClient.end();
  await delayedAction(async () => {
    await postgresContainer.stop();
  });
};

export const createMockRequestingUser = (overrides?: {
  userSubjectId?: string;
  email?: string;
}) => ({
  userSubjectId: overrides?.userSubjectId ?? faker.string.uuid(),
  email: overrides?.email ?? faker.internet.email(),
});

export const createMockCreateClientDto = (overrides?: {
  clientDisplayName?: string;
  projectDisplayName?: string;
  subdomain?: string;
  isBugReportsEnabled?: boolean;
  isFeatureRequestsEnabled?: boolean;
  isFeatureFeedbackEnabled?: boolean;
}): CreateClientDto => ({
  clientDisplayName:
    overrides?.clientDisplayName ?? faker.internet.displayName(),
  projectDisplayName: overrides?.projectDisplayName ?? faker.animal.petName(),
  subdomain: overrides?.subdomain ?? faker.internet.domainName().split('.')[0],
  isBugReportsEnabled: overrides?.isBugReportsEnabled ?? true,
  isFeatureRequestsEnabled: overrides?.isFeatureRequestsEnabled ?? true,
  isFeatureFeedbackEnabled: overrides?.isFeatureFeedbackEnabled ?? true,
});
