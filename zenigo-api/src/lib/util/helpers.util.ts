import {execSync} from 'node:child_process';

import {defaultIntegrationTestContainerStopDelay} from '../constants/testing/integration-testing.constants';

export const delayedAction = async (
  callback: () => Promise<void>,
  timeout?: number,
) =>
  new Promise<void>((resolve) =>
    setTimeout(async () => {
      await callback();
      resolve();
    }, timeout ?? defaultIntegrationTestContainerStopDelay),
  );

export const runPrismaMigrations = async (connectionUri: string) => {
  execSync(
    `export DATABASE_URL=${connectionUri} && npx prisma migrate deploy`,
    {
      stdio: 'inherit',
    },
  );
};
