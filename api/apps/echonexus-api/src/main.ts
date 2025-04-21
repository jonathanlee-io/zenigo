import {bootstrap} from '@app/init';

import {AppModule} from './app/app.module';

bootstrap(AppModule, 8001).catch((error) => console.error(error));
