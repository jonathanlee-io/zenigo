import {FLAG_API_KEY} from '@app/auth/decorators';
import {ApiKeyGuard} from '@app/auth/guards/api-key/api-key.guard';
import {ExecutionContext, Injectable} from '@nestjs/common';
import {Reflector} from '@nestjs/core';
import {AuthGuard} from '@nestjs/passport';

import {IS_PUBLIC_KEY} from '../../decorators/is-public/is-public.decorator';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(
    private readonly reflector: Reflector,
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
