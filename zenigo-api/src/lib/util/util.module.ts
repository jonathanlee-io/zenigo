import {Module} from '@nestjs/common';

import {RandomService} from './services/random/random.service';

@Module({
  providers: [RandomService],
  exports: [RandomService],
})
export class UtilModule {}
