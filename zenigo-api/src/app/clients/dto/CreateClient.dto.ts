import {ApiProperty} from '@nestjs/swagger';
import {
  IsBoolean,
  IsDefined,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateClientDto {
  @IsDefined()
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  @ApiProperty({required: true})
  clientDisplayName: string;

  @IsDefined()
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  @ApiProperty({required: true})
  projectDisplayName: string;

  @IsDefined()
  @IsString()
  @Matches(/^[a-zA-Z0-9][a-zA-Z0-9.-]+[a-zA-Z0-9]$/)
  @ApiProperty({required: true})
  subdomain: string;

  @IsDefined()
  @IsBoolean()
  @ApiProperty({required: true})
  isBugReportsEnabled: boolean;

  @IsDefined()
  @IsBoolean()
  @ApiProperty({required: true})
  isFeatureRequestsEnabled: boolean;

  @IsDefined()
  @IsBoolean()
  @ApiProperty({required: true})
  isFeatureFeedbackEnabled: boolean;
}
