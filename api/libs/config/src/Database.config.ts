import {Configuration, Value} from '@jdevel/configify';
import {IsDefined, IsString} from 'class-validator';

export type DatabaseUrlKeys = keyof DatabaseConfig;

@Configuration()
export class DatabaseConfig {
  @IsDefined()
  @IsString()
  @Value('FEATURE_FLAGS_DATABASE_URL')
  featureFlagsUrl: string;

  @IsDefined()
  @IsString()
  @Value('FEEDBACK_DATABASE_URL')
  feedbackUrl: string;

  @IsDefined()
  @IsString()
  @Value('IDENTITY_DATABASE_URL')
  identityUrl: string;

  @IsDefined()
  @IsString()
  @Value('PAYMENTS_DATABASE_URL')
  paymentsUrl: string;
}
