import {Module} from '@nestjs/common';

import {EmbedScriptsController} from './controllers/embed-scripts/embed-scripts.controller';

@Module({
  imports: [],
  controllers: [EmbedScriptsController],
})
export class EmbedScriptsModule {}
