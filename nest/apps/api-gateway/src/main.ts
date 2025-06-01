import {bootstrapFastifyApi} from '@app/init/boostrap-api';
import {configDotenv} from 'dotenv';

import {ApiGatewayModule} from './api-gateway.module';
import {dummyApiGatewayEnvironment} from './config/environment';

configDotenv({path: '../.env'});

bootstrapFastifyApi(
  ApiGatewayModule,
  8000,
  Object.keys(dummyApiGatewayEnvironment),
).catch((error) => console.error(error));
