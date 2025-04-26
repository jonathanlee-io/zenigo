import * as fs from 'fs';
import * as path from 'path';

import {Config} from 'jest';
import {pathsToModuleNameMapper} from 'ts-jest';

const tsconfigPath = path.resolve(__dirname, 'tsconfig.json');
const tsconfigFile = fs.readFileSync(tsconfigPath, 'utf-8');
const tsconfig = JSON.parse(tsconfigFile);

const compilerOptionsPaths = tsconfig.compilerOptions?.paths ?? {};
const moduleNameMapper = pathsToModuleNameMapper(compilerOptionsPaths, {
  prefix: '<rootDir>/',
});

const config: Config = {
  projects: [
    {
      displayName: 'unit',
      transform: {
        '^.+\\.(t|j)s$': [
          'ts-jest',
          {tsconfig: '<rootDir>/tsconfig.spec.json'},
        ],
      },
      rootDir: './',
      collectCoverageFrom: ['**/*.ts'],
      testMatch: ['<rootDir>/**/*.spec.ts'],
      moduleNameMapper,
    },
    {
      displayName: 'integration',
      transform: {
        '^.+\\.(t|j)s$': [
          'ts-jest',
          {tsconfig: '<rootDir>/tsconfig.it-spec.json'},
        ],
      },
      runner: 'jest-serial-runner',
      rootDir: './',
      collectCoverageFrom: ['**/*.ts'],
      testMatch: ['<rootDir>/**/*.it-spec.ts'],
      moduleNameMapper,
    },
    {
      displayName: 'e2e',
      transform: {
        '^.+\\.(t|j)s$': [
          'ts-jest',
          {tsconfig: '<rootDir>/tsconfig.e2e-spec.json'},
        ],
      },
      runner: 'jest-serial-runner',
      rootDir: './',
      testMatch: ['<rootDir>/**/*.e2e-spec.ts'],
      moduleNameMapper,
    },
  ],
  moduleFileExtensions: ['js', 'json', 'ts'],
  coverageDirectory: './coverage',
  testEnvironment: 'node',
};

export default config;
