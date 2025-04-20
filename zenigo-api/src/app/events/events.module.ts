import {Logger, Module} from '@nestjs/common';

import {PrismaModule} from '../../lib/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [
    {
      provide: Logger,
      useFactory: () => new Logger(EventsModule.name),
    },
  ],
})
export class EventsModule {}
