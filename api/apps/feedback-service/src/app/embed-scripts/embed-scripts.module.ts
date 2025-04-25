import {Module} from '@nestjs/common';

import {EmbedScriptsController} from './controllers/embed-scripts/embed-scripts.controller';
import {ProjectsModule} from '../../../../identity-service/src/app/projects/projects.module';

@Module({
  imports: [ProjectsModule],
  controllers: [EmbedScriptsController],
})
export class EmbedScriptsModule {}
