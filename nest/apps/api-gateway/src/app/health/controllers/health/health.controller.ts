import {IsPublic} from '@app/auth';
import {Controller, Get} from '@nestjs/common';

@Controller()
export class HealthController {
  @IsPublic()
  @Get()
  async getHealth() {
    return {
      status: 'ok',
    };
  }
}
