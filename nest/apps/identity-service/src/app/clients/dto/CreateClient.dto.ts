import {ApiProperty} from '@nestjs/swagger';
import {IsDefined, IsString, MaxLength, MinLength} from 'class-validator';

export class CreateClientDto {
  @IsDefined()
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  @ApiProperty({required: true})
  clientDisplayName: string;

  @IsDefined()
  @IsString()
  @ApiProperty({required: true})
  paymentPlanId: string;
}
