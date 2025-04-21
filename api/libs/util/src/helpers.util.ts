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

  static async runPrismaMigrations(connectionUri: string) {
    execSync(
      `export DATABASE_URL=${connectionUri} && npx prisma migrate deploy`,
      {
        stdio: 'inherit',
      },
    );
  }
}
