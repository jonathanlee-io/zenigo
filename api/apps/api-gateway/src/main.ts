import {bootstrapFastifyApi} from '@app/init/boostrap-api';

import {ApiGatewayModule} from './api-gateway.module';

bootstrapFastifyApi(ApiGatewayModule, 8000).catch((error) =>
  console.error(error),
);
