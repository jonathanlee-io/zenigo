import {reservedSubdomains} from '@app/constants';
import {MicroserviceSendResult} from '@app/dto';
import {HttpStatus, Injectable} from '@nestjs/common';

import {SubdomainRepository} from '../../repositories/subdomain/subdomain.repository';

@Injectable()
export class SubdomainService {
  constructor(private readonly subdomainRepository: SubdomainRepository) {}

  async getSubdomainAvailability({
    subdomain,
  }: {
    subdomain: string;
  }): Promise<MicroserviceSendResult<{isSubdomainAvailable: boolean}>> {
    const isSubdomainAvailable =
      (await this.subdomainRepository.getSubdomainAvailability({subdomain})) &&
      !reservedSubdomains.includes(subdomain);

    return {
      status: HttpStatus.OK,
      data: {
        isSubdomainAvailable,
      },
    };
  }
}
