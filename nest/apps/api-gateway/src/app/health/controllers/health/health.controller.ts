import {Controller, Get} from '@nestjs/common';

@Controller()
export class HealthController {
  @Get()
  async getHealth() {
    return {
      status: 'ok',
    };
  }
}
