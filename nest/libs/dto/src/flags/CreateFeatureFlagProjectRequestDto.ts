import {IsDefined, IsString, MaxLength, MinLength} from 'class-validator';

export class CreateFeatureFlagProjectRequestDto {
  @IsDefined()
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  projectName: string;

  @IsDefined()
  @IsString()
  clientId: string;
}
