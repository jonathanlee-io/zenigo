export interface FeatureFlagsEnvironment {
  NODE_ENV: string;
  FEATURE_FLAGS_DATABASE_URL: string;
  RABBIT_MQ_URLS: string;
  RABBIT_MQ_FEATURE_FLAGS_QUEUE: string;
  RABBIT_MQ_IDENTITY_QUEUE: string;
}

export const dummyFeatureFlagsEnvironment: FeatureFlagsEnvironment = {
  NODE_ENV: 'development',
  FEATURE_FLAGS_DATABASE_URL: 'postgres://localhost',
  RABBIT_MQ_URLS: 'amqp://localhost',
  RABBIT_MQ_FEATURE_FLAGS_QUEUE: 'feature-flags',
  RABBIT_MQ_IDENTITY_QUEUE: 'identity',
};
