// prisma.module.ts - In your shared database library

import {DynamicModule, Logger, OnModuleInit, Provider} from '@nestjs/common';
import {PrismaClient} from '@prisma/client'; // Import a base type if needed, or use 'any'/'unknown' carefully

// Define an interface for the options
export interface PrismaModuleOptions {
  client: new (...args: any[]) => PrismaClient & OnModuleInit; // Type for a PrismaClient constructor
}

// Define an injection token for the service itself
export const PRISMA_SERVICE = 'PRISMA_SERVICE';

export class PrismaModule {
  static register(options: PrismaModuleOptions): DynamicModule {
    const prismaServiceProvider: Provider = {
      provide: PRISMA_SERVICE,
      useFactory: async () => {
        class DynamicPrismaService
          extends options.client
          implements OnModuleInit
        {
          async onModuleInit() {
            if (super.onModuleInit) {
              await super.onModuleInit();
            }
            await this.$connect();
            Logger.log(`Prisma connected for client: ${options.client.name}`);
          }
        }

        // Manually trigger onModuleInit if not handled by Nest lifecycle for dynamically created classes
        // However, NestJS dependency injection usually handles this when the factory resolves.
        // If you face issues with $connect not being called, uncomment the next line:
        // await instance.onModuleInit();
        return new DynamicPrismaService();
      },
    };

    return {
      module: PrismaModule,
      providers: [prismaServiceProvider],
      exports: [prismaServiceProvider],
    };
  }
}
