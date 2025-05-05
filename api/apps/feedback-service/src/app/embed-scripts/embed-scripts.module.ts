import {Module} from '@nestjs/common';

import {EmbedScriptsController} from './controllers/embed-scripts/embed-scripts.controller';
import {EmbedScriptsService} from './services/embed-scripts/embed-scripts.service';

@Module({
  imports: [],
  controllers: [EmbedScriptsController],
  providers: [EmbedScriptsService],
})
export class EmbedScriptsModule {}
