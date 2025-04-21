import {Configuration, Value} from '@jdevel/configify';
import {IsDefined, IsString} from 'class-validator';

export type DatabaseUrlKeys = 'featureFlagUrl' | 'feedbackUrl';

@Configuration()
export class DatabaseConfig {
  @IsDefined()
  @IsString()
  @Value('FEATURE_FLAG_DATABASE_URL')
  featureFlagUrl: string;

  @IsDefined()
  @IsString()
  @Value('FEEDBACK_DATABASE_URL')
  feedbackUrl: string;
}
