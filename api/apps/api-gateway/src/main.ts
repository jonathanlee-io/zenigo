import {bootstrapFastifyApi} from '@app/init/boostrap-api';

import {ApiGatewayModule} from './api-gateway.module';
import {dummyApiGatewayEnvironment} from './config/environment';

bootstrapFastifyApi(
  ApiGatewayModule,
  8000,
  Object.keys(dummyApiGatewayEnvironment),
).catch((error) => console.error(error));
