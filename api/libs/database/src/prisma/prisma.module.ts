import {
  DynamicModule,
  Logger,
  Module,
  OnModuleInit,
  Provider,
} from '@nestjs/common';

export interface PrismaModuleOptions {
  client: new (...args: any[]) => any;
}

export const PRISMA_SERVICE = 'PRISMA_SERVICE';

@Module({})
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
            Logger.log('Prisma connected for client');
          }
        }
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
