import {JwtAuthGuard} from '@app/auth';
import {Reflector} from '@nestjs/core';
import {Mocked, TestBed} from '@suites/unit';

describe('JwtAuthGuard', () => {
  let guard: JwtAuthGuard;
  let mockReflector: Mocked<Reflector>;

  beforeEach(async () => {
    const {unit, unitRef} = await TestBed.solitary(JwtAuthGuard).compile();
    guard = unit;
    mockReflector = unitRef.get<Reflector>(Reflector);
  });

  it('should be defined', () => {
    expect(guard).toBeDefined();
    expect(mockReflector).toBeDefined();
  });
});
