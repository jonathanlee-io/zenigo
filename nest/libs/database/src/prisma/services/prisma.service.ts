import {OnModuleInit} from '@nestjs/common';

import {PrismaClient} from '../../../../../apps/feedback-service/generated/client';

export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
