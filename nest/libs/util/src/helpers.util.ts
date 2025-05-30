import {createHash} from 'crypto';
import {execSync} from 'node:child_process';

import {defaultIntegrationTestContainerStopDelay} from '@app/constants/testing/integration-testing.constants';
import {v4} from 'uuid';

export class HelpersUtil {
  static async delayedAction(callback: () => Promise<void>, timeout?: number) {
    return new Promise<void>((resolve) =>
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

  static generateApiKey(prefix: string) {
    const rawApiKey = `${prefix}_${v4().replace(/-/g, '')}`;
    const hashedApiKey = createHash('sha256')
      .update(rawApiKey)
      .digest('hex')
      .toString();
    return {
      raw: rawApiKey,
      hashed: hashedApiKey,
    };
  }
}
