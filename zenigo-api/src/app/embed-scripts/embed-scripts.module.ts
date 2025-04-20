import {Module} from '@nestjs/common';

import {ProjectsModule} from '../projects/projects.module';
import {EmbedScriptsController} from './controllers/embed-scripts/embed-scripts.controller';

@Module({
  imports: [ProjectsModule],
  controllers: [EmbedScriptsController],
})
export class EmbedScriptsModule {}
