import {IDENTITY_SERVICE} from '@app/comms';
import {AuthenticatedMicroserviceControllerPayload} from '@app/dto';
import {MicroserviceSendResultBuilder} from '@app/util/microservice-send-result.helper';
import {Controller, Logger} from '@nestjs/common';
import {MessagePattern, Payload} from '@nestjs/microservices';

import {PaymentsService} from '../../../../../../payments-service/src/app/payments/services/payments/payments.service';
import {ClientsService} from '../../services/clients/clients.service';

@Controller()
export class ClientsController {
  constructor(
    private readonly logger: Logger,
    private readonly clientsService: ClientsService,
  ) {}

  @MessagePattern(IDENTITY_SERVICE.CREATE_CLIENT)
  async registerNewClient(
    @Payload()
    {
      authenticatedUser: {email: requestingUserEmail},
      data: {clientDisplayName},
    }: AuthenticatedMicroserviceControllerPayload<{
      clientDisplayName: string;
    }>,
  ) {
    return this.clientsService.createClient(requestingUserEmail, {
      paymentPlanId: PaymentsService.paymentPlans[0].id,
      clientDisplayName,
    });
  }

  @MessagePattern(IDENTITY_SERVICE.GET_CLIENT_BY_CLIENT_SUBDOMAIN)
  async getClientByClientSubdomain(
    @Payload()
    {
      clientSubdomain,
      authenticatedUser: {email: requestingUserEmail},
    }: AuthenticatedMicroserviceControllerPayload<never>,
  ) {
    try {
      const result = await this.clientsService.getClientByClientSubdomain({
        clientSubdomain,
        requestingUserEmail,
      });
      return MicroserviceSendResultBuilder.ok(result);
    } catch (exception) {
      this.logger.error(exception);
      return MicroserviceSendResultBuilder.notFound();
    }
  }

  @MessagePattern(IDENTITY_SERVICE.GET_CLIENT_BY_CLIENT_ID)
  async getClientByClientId(
    @Payload()
    {
      data: {clientId},
      authenticatedUser: {email: requestingUserEmail},
    }: AuthenticatedMicroserviceControllerPayload<never>,
  ) {
    try {
      const result = await this.clientsService.getClientByClientId({
        clientId,
        requestingUserEmail,
      });
      return MicroserviceSendResultBuilder.ok(result);
    } catch (exception) {
      this.logger.error(exception);
      return MicroserviceSendResultBuilder.notFound();
    }
  }
}
