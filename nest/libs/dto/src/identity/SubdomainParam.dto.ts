import {IsDefined, IsString} from 'class-validator';

export class SubdomainParamDto {
  @IsDefined()
  @IsString()
  subdomain: string;
}
