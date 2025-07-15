import {IsDefined, IsString, Matches} from 'class-validator';

export class SubdomainParamDto {
  @IsDefined()
  @IsString()
  @Matches(/^[a-z0-9][a-z0-9-_]{0,61}$/)
  subdomain: string;
}
