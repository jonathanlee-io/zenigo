export interface FeatureFlagsEnvironment {
  NODE_ENV: string;
  FEATURE_FLAGS_DATABASE_URL: string;
  RABBIT_MQ_HOST: string;
  RABBIT_MQ_PORT: number;
}

export const dummyFeatureFlagsEnvironment: FeatureFlagsEnvironment = {
  NODE_ENV: 'development',
  FEATURE_FLAGS_DATABASE_URL: 'postgres://localhost',
  RABBIT_MQ_HOST: '127.0.0.1',
  RABBIT_MQ_PORT: 5673,
};
