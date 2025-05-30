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
          constructor() {
            super({log: [{level: 'query', emit: 'event'}]});
          }

          async onModuleInit() {
            if (super.onModuleInit) {
              await super.onModuleInit();
            }
            await this.$on('query', (e) => {
              if (process.env.NODE_ENV === 'development') {
                Logger.log(
                  `${e.duration}ms - ${e.query} - ${e.params}`,
                  'Prisma query',
                );
              } else {
                Logger.log(`${e.duration}ms`, 'Prisma query');
              }
            });
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
