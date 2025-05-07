import {ArgumentsHost, Catch, Logger, RpcExceptionFilter} from '@nestjs/common';
import {RpcException} from '@nestjs/microservices';
import {throwError} from 'rxjs';

@Catch(RpcException)
export class GlobalRpcExceptionFilter<T> implements RpcExceptionFilter {
  constructor(private readonly logger: Logger) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  catch(exception: T, _host: ArgumentsHost) {
    this.logger.error(`RPC Exception Filtered: `, exception);
    return throwError(() => exception);
  }
}
