import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';

@Injectable()
export class ApiGatewayService {
  constructor(
    @Inject('FEEDBACK') private readonly featureFlagsClient: ClientProxy,
  ) {}

  getHello() {
    return this.featureFlagsClient.send<any, any>('GET_FEATURE_FLAGS', {
      user: '12345',
    });
  }
}
