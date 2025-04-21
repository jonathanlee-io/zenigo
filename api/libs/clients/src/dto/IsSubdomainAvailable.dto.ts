import {ApiProperty} from '@nestjs/swagger';
import {IsNotEmpty, IsString, Matches} from 'class-validator';

export class IsSubdomainAvailableDto {
  @IsNotEmpty()
  @IsString()
  @Matches(/^[a-z0-9][a-z0-9-_]{0,61}$/)
  @ApiProperty()
  subdomain: string;
}
