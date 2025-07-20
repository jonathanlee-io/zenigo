import {ApiProperty} from '@nestjs/swagger';
import {
  IsDefined,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateClientProjectDto {
  @IsDefined()
  @IsString()
  @ApiProperty({required: true})
  clientId: string;

  @IsDefined()
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  @ApiProperty({required: true})
  name: string;

  @IsDefined()
  @IsString()
  @Matches(/^[a-zA-Z0-9][a-zA-Z0-9.-]+[a-zA-Z0-9]$/)
  @ApiProperty({required: true})
  subdomain: string;
}
