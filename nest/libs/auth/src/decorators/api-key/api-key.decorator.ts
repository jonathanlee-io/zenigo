import {SetMetadata} from '@nestjs/common';

export const FLAG_API_KEY = 'flag-api-key';

export const UseFlagApiKey = () => SetMetadata(FLAG_API_KEY, true);
