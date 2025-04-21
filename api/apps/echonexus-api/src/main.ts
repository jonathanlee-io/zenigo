import {bootstrap} from '@app/init';

import {AppModule} from './app/app.module';

bootstrap(AppModule, 8001, './apps/echonexus-api/prisma/schema.prisma').catch(
  (error) => console.error(error),
);
