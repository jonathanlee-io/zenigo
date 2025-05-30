import {CurrentUserDto} from '@app/auth';
import {createParamDecorator, ExecutionContext} from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    return <CurrentUserDto>{
      clientSubdomain: request.hostname?.split('.')?.[0]?.toLowerCase(),
      requestingUserId: request.user?.id?.toLowerCase(),
      requestingUserEmail: request.user?.email?.toLowerCase(),
    };
  },
);
