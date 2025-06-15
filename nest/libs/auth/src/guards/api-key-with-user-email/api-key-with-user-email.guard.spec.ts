import {ApiKeyWithUserEmailGuard} from './api-key-with-user-email.guard';

describe('ApiKeyWithUserEmailGuard', () => {
  it('should be defined', () => {
    expect(new ApiKeyWithUserEmailGuard()).toBeDefined();
  });
});
