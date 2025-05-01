import {execSync} from 'node:child_process';

import {defaultIntegrationTestContainerStopDelay} from '@app/constants/testing/integration-testing.constants';

export class HelpersUtil {
  static async delayedAction(callback: () => Promise<void>, timeout?: number) {
    new Promise<void>((resolve) =>
      setTimeout(async () => {
        await callback();
        resolve();
      }, timeout ?? defaultIntegrationTestContainerStopDelay),
    );
  }

  static async runPrismaMigrations({
    connectionUri,
    databaseUrlKey = 'DATABASE_URL',
    schemaOverride = './schema.prisma',
  }: {
    connectionUri: string;
    databaseUrlKey: string;
    schemaOverride: string;
  }) {
    execSync(
      `export ${databaseUrlKey}=${connectionUri} && npx prisma migrate deploy --schema=${schemaOverride}`,
      {
        stdio: 'inherit',
      },
    );
  }
}
