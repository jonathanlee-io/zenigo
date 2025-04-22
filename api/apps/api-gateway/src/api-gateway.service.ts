import {Inject, Injectable, Logger} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {catchError, tap, throwError} from 'rxjs';

@Injectable()
export class ApiGatewayService {
  constructor(
    @Inject('FEEDBACK') private readonly featureFlagsClient: ClientProxy,
  ) {}

  getHello() {
    return this.featureFlagsClient
      .send<any, any>('GET_FEATURE_FLAGS', {
        user: '12345',
      })
      .pipe(
        tap((result) => Logger.log(result)),
        catchError((err) => throwError(() => err)),
      );
  }
}
