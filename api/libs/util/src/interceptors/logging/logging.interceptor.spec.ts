import {Logger} from '@nestjs/common';

import {LoggingInterceptor} from './logging.interceptor';

describe('LoggingInterceptor', () => {
  let mockLogger: jest.Mocked<Logger>;

  it('should be defined', () => {
    expect(new LoggingInterceptor(mockLogger)).toBeDefined();
  });
});
