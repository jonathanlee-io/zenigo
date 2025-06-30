export interface ApiGatewayEnvironment {
  NODE_ENV: string;
  JWT_SECRET: string;
  ADMIN_EMAIL: string;
  RABBIT_MQ_URLS: string;
  RABBIT_MQ_FEATURE_FLAGS_QUEUE: string;
  RABBIT_MQ_FEEDBACK_QUEUE: string;
  RABBIT_MQ_IDENTITY_QUEUE: string;
  RABBIT_MQ_PAYMENTS_QUEUE: string;
  REDIS_URL: string;
  STRIPE_API_KEY: string;
  STRIPE_WEBHOOK_SECRET: string;
}

export const dummyApiGatewayEnvironment: ApiGatewayEnvironment = {
  NODE_ENV: 'development',
  JWT_SECRET: 'secret',
  ADMIN_EMAIL: '<EMAIL>',
  RABBIT_MQ_URLS: 'amqp://localhost',
  RABBIT_MQ_FEATURE_FLAGS_QUEUE: 'feature-flags',
  RABBIT_MQ_FEEDBACK_QUEUE: 'feedback',
  RABBIT_MQ_IDENTITY_QUEUE: 'identity',
  RABBIT_MQ_PAYMENTS_QUEUE: 'payments',
  REDIS_URL: 'redis://localhost',
  STRIPE_API_KEY: 'sk_test_123',
  STRIPE_WEBHOOK_SECRET: 'whsec_123',
};
