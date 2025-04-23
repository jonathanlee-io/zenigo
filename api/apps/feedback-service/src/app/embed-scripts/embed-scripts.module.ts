import {Module} from '@nestjs/common';

import {EmbedScriptsController} from './controllers/embed-scripts/embed-scripts.controller';
import {ProjectsModule} from '../../../../identity-service/src/projects/projects.module';

@Module({
  imports: [ProjectsModule],
  controllers: [EmbedScriptsController],
})
export class EmbedScriptsModule {}
