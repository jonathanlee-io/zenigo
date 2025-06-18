import {FLAG_API_KEY, IS_PUBLIC_KEY} from '@app/auth/decorators';
import {FLAG_API_KEY_WITH_USER_EMAIL} from '@app/auth/decorators/api-key-with-user-email/api-key-with-user-email.decorator';
import {ApiKeyGuard} from '@app/auth/guards/api-key/api-key.guard';
import {ApiKeyWithUserEmailGuard} from '@app/auth/guards/api-key-with-user-email/api-key-with-user-email.guard';
import {ExecutionContext, Injectable} from '@nestjs/common';
import {Reflector} from '@nestjs/core';
import {AuthGuard} from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(
    private readonly reflector: Reflector,
    private readonly apiKeyWithUserEmailGuard: ApiKeyWithUserEmailGuard,
    private readonly apiKeyGuard: ApiKeyGuard,
  ) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }

    const isApiKeyWithMandatoryUserHeader =
      this.reflector.getAllAndOverride<boolean>(FLAG_API_KEY_WITH_USER_EMAIL, [
        context.getHandler(),
        context.getClass(),
      ]);

    if (isApiKeyWithMandatoryUserHeader) {
      return this.apiKeyWithUserEmailGuard.canActivate(context);
    }

    const isApiKey = this.reflector.getAllAndOverride<boolean>(FLAG_API_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isApiKey) {
      return this.apiKeyGuard.canActivate(context);
    }

    return super.canActivate(context);
  }
}
