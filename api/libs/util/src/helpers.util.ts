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

  static async runPrismaMigrations(
    connectionUri: string,
    databaseUrlKey: string = 'DATABASE_URL',
    schemaOverride: string = './schema.prisma',
  ) {
    execSync(
      `export ${databaseUrlKey}=${connectionUri} && npx prisma migrate deploy --schema=${schemaOverride}`,
      {
        stdio: 'inherit',
      },
    );
  }
}
