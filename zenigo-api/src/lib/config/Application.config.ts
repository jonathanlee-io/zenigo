import {Configuration, Value} from '@jdevel/configify';
import {IsDefined, IsString, Matches} from 'class-validator';

import {NodeEnvironment} from './environment';

@Configuration()
export class ApplicationConfig {
  @IsDefined()
  @IsString()
  @Matches(/^(development|staging|production)$/)
  @Value('NODE_ENV')
  nodeEnv: NodeEnvironment;
}
