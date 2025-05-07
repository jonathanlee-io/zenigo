import {GlobalRpcExceptionFilter} from '@app/util';
import {Logger} from '@nestjs/common';

describe('RpcExceptionFilter', () => {
  it('should be defined', () => {
    expect(new GlobalRpcExceptionFilter(new Logger())).toBeDefined();
  });
});
