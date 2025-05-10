import {WidgetMetadataType} from '@app/dto';
import {ApiProperty} from '@nestjs/swagger';
import {IsDefined, IsNotEmpty, IsString, Matches} from 'class-validator';

export class GetProductConfigFlagStatusDto {
  @IsNotEmpty()
  @IsString()
  @IsDefined()
  @Matches(/(^bug_report$|^feature_request$|^feature_feedback$)/)
  @ApiProperty({required: true})
  flag: WidgetMetadataType;
}
