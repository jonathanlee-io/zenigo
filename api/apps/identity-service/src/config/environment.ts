export interface IdentityEnvironment {
  NODE_ENV: string;
  ADMIN_EMAIL: string;
  IDENTITY_DATABASE_URL: string;
  RABBIT_MQ_URLS: string;
  RABBIT_MQ_IDENTITY_QUEUE: string;
}

export const dummyIdentityEnvironment: IdentityEnvironment = {
  NODE_ENV: 'development',
  ADMIN_EMAIL: '<EMAIL>',
  IDENTITY_DATABASE_URL: 'postgres://localhost',
  RABBIT_MQ_URLS: 'amqp://localhost',
  RABBIT_MQ_IDENTITY_QUEUE: 'identity',
};
