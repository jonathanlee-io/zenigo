import {bootstrap} from '@app/init';

import {AppModule} from './app/app.module';

bootstrap(AppModule, 8000, './apps/zenigo-api/prisma/schema.prisma').catch(
  (error) => console.error(error),
);
