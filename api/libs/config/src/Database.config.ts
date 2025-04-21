import {Configuration, Value} from '@jdevel/configify';
import {IsDefined, IsString} from 'class-validator';

@Configuration()
export class DatabaseConfig {
  @IsDefined()
  @IsString()
  @Value('ZENIGO_API_DATABASE_URL')
  url: string;
}
