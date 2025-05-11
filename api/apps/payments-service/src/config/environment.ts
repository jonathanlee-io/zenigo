export interface PaymentEnvironment {
  NODE_ENV: string;
  PAYMENTS_DATABASE_URL: string;
  RABBIT_MQ_PAYMENTS_QUEUE: string;
  RABBIT_MQ_URLS: string;
}

export const dummyPaymentsEnvironment: PaymentEnvironment = {
  NODE_ENV: 'development',
  PAYMENTS_DATABASE_URL: 'postgres://localhost',
  RABBIT_MQ_PAYMENTS_QUEUE: 'amqp://localhost',
  RABBIT_MQ_URLS: 'amqp://localhost',
};
