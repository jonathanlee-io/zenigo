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

@Module({})
export class PrismaModule {
  static register(
    options: PrismaModuleOptions,
    {injectionKey}: {injectionKey: string},
  ): DynamicModule {
    const prismaServiceProvider: Provider = {
      provide: injectionKey,
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
