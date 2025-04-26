import * as fs from 'fs';
import * as path from 'path';

import {Config} from 'jest';
// 1. Import the utility from ts-jest
import {pathsToModuleNameMapper} from 'ts-jest';
// 2. Import Node.js modules for file reading

// 3. Read and parse tsconfig.json manually
const tsconfigPath = path.resolve(__dirname, 'tsconfig.json'); // Get absolute path
const tsconfigFile = fs.readFileSync(tsconfigPath, 'utf-8'); // Read file content
const tsconfig = JSON.parse(tsconfigFile); // Parse JSON content

// 4. Generate the moduleNameMapper object using the parsed config
// Ensure paths exist, provide an empty object fallback
const compilerOptionsPaths = tsconfig.compilerOptions?.paths || {};
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
      // Apply the generated mapper to this project
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
      // Apply the generated mapper to this project
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
      // Apply the generated mapper to this project
      moduleNameMapper,
    },
  ],
  moduleFileExtensions: ['js', 'json', 'ts'],
  coverageDirectory: './coverage',
  testEnvironment: 'node',
  // Global mapper removed as it's per-project now
};

export default config;
