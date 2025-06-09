import {CacheInterceptor} from '@nestjs/cache-manager';
import {ExecutionContext, Injectable} from '@nestjs/common';

@Injectable()
export class CachingSubdomainInterceptor extends CacheInterceptor {
  trackBy(context: ExecutionContext): string | undefined {
    const request = context.switchToHttp().getRequest();
    const host = request.headers.host ?? request.get('host');
    const subdomain = host.split('.')[0];

    const route = context.getHandler().name;
    return `${route}-${subdomain.toLowerCase()}`;
  }
}
