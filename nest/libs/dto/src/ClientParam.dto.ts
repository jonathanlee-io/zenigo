import {IsDefined, IsNotEmpty, IsString} from 'class-validator';

export class ClientParamDto {
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  client: string;
}
