import {WidgetMetadataType} from '@app/dto';
import {ApiProperty} from '@nestjs/swagger';
import {IsDefined, IsNotEmpty, IsString, IsUrl, Matches} from 'class-validator';

export class SubmitProductFeedbackDto {
  @IsNotEmpty()
  @IsString()
  @IsDefined()
  @ApiProperty({required: true})
  userFeedback: string;

  @IsNotEmpty()
  @IsString()
  @IsDefined()
  @Matches(/(^bug_report$|^feature_request$|^feature_feedback$)/)
  @ApiProperty({required: true})
  widgetMetadataType: WidgetMetadataType;

  @IsNotEmpty()
  @IsString()
  @IsDefined()
  @ApiProperty({required: true})
  widgetMetadataTimezone: string;

  @IsNotEmpty()
  @IsString()
  @IsDefined()
  @IsUrl({require_tld: false}) // Allow localhost
  @ApiProperty({required: true})
  widgetMetadataUrl: string;
}
