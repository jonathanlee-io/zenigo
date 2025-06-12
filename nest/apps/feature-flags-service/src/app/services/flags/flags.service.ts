import {MicroserviceSendResult} from '@app/dto';
import {HttpStatus, Injectable} from '@nestjs/common';

import {FlagsRepository} from '../../repositories/flags/flags.repository';

@Injectable()
export class FlagsService {
  constructor(private readonly flagsRepository: FlagsRepository) {}

  async getAllFlags(): Promise<MicroserviceSendResult<unknown>> {
    const flags = await this.flagsRepository.getAllFlags();
    return {
      status: HttpStatus.OK,
      data: flags,
    };
  }
}
