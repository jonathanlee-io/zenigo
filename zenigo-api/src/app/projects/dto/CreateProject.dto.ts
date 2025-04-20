import {ApiProperty} from '@nestjs/swagger';
import {
  IsBoolean,
  IsDefined,
  IsString,
  IsUUID,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateProjectDto {
  @IsDefined()
  @IsString()
  @IsUUID()
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
