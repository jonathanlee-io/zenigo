import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import {Observable} from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private readonly logger: Logger) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    this.logger.log(
      `Request (${request.hostname}) from IP [${request.ip}] from user <${request?.user?.email ?? 'anonymous'}> ${request.method} ${request.url}`,
    );
    return next.handle();
  }
}
