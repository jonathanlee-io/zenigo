import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
} from '@nestjs/common';
import {Observable} from 'rxjs';

@Injectable()
export class ApiKeyWithUserEmailGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    Logger.log(
      `API key used: ${context.switchToHttp().getRequest().headers['x-api-key']} with user email: ${context.switchToHttp().getRequest().headers['x-user-email']}`,
    );
    return context.switchToHttp().getRequest().headers['x-user-email'];
  }
}
