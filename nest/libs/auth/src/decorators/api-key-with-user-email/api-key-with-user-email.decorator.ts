import {SetMetadata} from '@nestjs/common';

export const FLAG_API_KEY_WITH_USER_EMAIL = 'flag-api-key-with-user-email';

export const UseFlagApiKeyWithUserEmail = () =>
  SetMetadata(FLAG_API_KEY_WITH_USER_EMAIL, true);
