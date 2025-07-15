import {IsDefined, IsString, MaxLength, MinLength} from 'class-validator';

export class CreateFeatureFLagProjectRequestDto {
  @IsDefined()
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  projectName: string;
}
