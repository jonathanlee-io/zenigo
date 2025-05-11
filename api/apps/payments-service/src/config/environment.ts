export interface PaymentEnvironment {
  NODE_ENV: string;
  PAYMENTS_DATABASE_URL: string;
  RABBIT_MQ_PAYMENTS_QUEUE: string;
  RABBIT_MQ_HOST: string;
  RABBIT_MQ_PORT: number;
}

export const dummyPaymentsEnvironment: PaymentEnvironment = {
  NODE_ENV: 'development',
  PAYMENTS_DATABASE_URL: 'postgres://localhost',
  RABBIT_MQ_PAYMENTS_QUEUE: 'amqp://localhost',
  RABBIT_MQ_HOST: '127.0.0.1',
  RABBIT_MQ_PORT: 5673,
};
