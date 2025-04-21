import {ProjectsModule} from '@app/projects/projects.module';
import {Module} from '@nestjs/common';

import {EmbedScriptsController} from './controllers/embed-scripts/embed-scripts.controller';

@Module({
  imports: [ProjectsModule],
  controllers: [EmbedScriptsController],
})
export class EmbedScriptsModule {}
