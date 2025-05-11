export interface IdentityEnvironment {
  NODE_ENV: string;
  ADMIN_EMAIL: string;
  IDENTITY_DATABASE_URL: string;
  RABBIT_MQ_URLS: string;
  RABBIT_MQ_HOST: string;
  RABBIT_MQ_PORT: number;
  RABBIT_MQ_IDENTITY_QUEUE: string;
}

export const dummyIdentityEnvironment: IdentityEnvironment = {
  NODE_ENV: 'development',
  ADMIN_EMAIL: '<EMAIL>',
  IDENTITY_DATABASE_URL: 'postgres://localhost',
  RABBIT_MQ_URLS: 'amqp://localhost',
  RABBIT_MQ_HOST: '127.0.0.1',
  RABBIT_MQ_PORT: 5673,
  RABBIT_MQ_IDENTITY_QUEUE: 'identity',
};
