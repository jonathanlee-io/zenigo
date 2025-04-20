import {Configuration, Value} from '@jdevel/configify';
import {IsDefined, IsEmail, IsString} from 'class-validator';

@Configuration()
export class AdminConfig {
  @IsDefined()
  @IsString()
  @IsEmail()
  @Value('ADMIN_EMAIL')
  adminEmail: string;
}
