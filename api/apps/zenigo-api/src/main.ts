import {bootstrap} from '@app/init';

import {AppModule} from './app/app.module';

bootstrap(AppModule, 8000).catch((error) => console.error(error));
