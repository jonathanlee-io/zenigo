export interface FeatureFlagsEnvironment {
  NODE_ENV: string;
  FEATURE_FLAGS_DATABASE_URL: string;
}

export const dummyFeatureFlagsEnvironment: FeatureFlagsEnvironment = {
  NODE_ENV: 'development',
  FEATURE_FLAGS_DATABASE_URL: 'postgres://localhost',
};
