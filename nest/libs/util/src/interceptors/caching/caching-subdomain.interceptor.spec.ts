import {CACHE_MANAGER} from '@nestjs/cache-manager';
import {Reflector} from '@nestjs/core';
import {Mocked, TestBed} from '@suites/unit';
import {Cache} from 'cache-manager';

import {CachingSubdomainInterceptor} from './caching-subdomain.interceptor';

describe('CachingSubdomainInterceptor', () => {
  let interceptor: CachingSubdomainInterceptor;
  let mockCacheManager: Mocked<Cache>;
  let mockReflector: Mocked<Reflector>;

  beforeEach(async () => {
    const {unit, unitRef} = await TestBed.solitary(
      CachingSubdomainInterceptor,
    ).compile();

    interceptor = unit;
    mockCacheManager = unitRef.get<Cache>(CACHE_MANAGER);
    mockReflector = unitRef.get<Reflector>(Reflector);
  });

  it('should be defined', () => {
    expect(interceptor).toBeDefined();
    expect(mockCacheManager).toBeDefined();
    expect(mockReflector).toBeDefined();
  });
});
