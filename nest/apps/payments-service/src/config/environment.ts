export interface PaymentsEnvironment {
  NODE_ENV: string;
  PAYMENTS_DATABASE_URL: string;
  RABBIT_MQ_PAYMENTS_QUEUE: string;
  RABBIT_MQ_URLS: string;
  REDIS_URL: string;
}

export const dummyPaymentsEnvironment: PaymentsEnvironment = {
  NODE_ENV: 'development',
  PAYMENTS_DATABASE_URL: 'postgres://localhost',
  RABBIT_MQ_PAYMENTS_QUEUE: 'amqp://localhost',
  RABBIT_MQ_URLS: 'amqp://localhost',
  REDIS_URL: 'redis://localhost',
};
