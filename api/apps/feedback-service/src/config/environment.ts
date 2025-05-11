export interface FeedbackEnvironment {
  NODE_ENV: string;
  FEEDBACK_DATABASE_URL: string;
  RABBIT_MQ_URLS: string;
  RABBIT_MQ_FEEDBACK_QUEUE: string;
  RABBIT_MQ_IDENTITY_QUEUE: string;
}

export const dummyFeedbackEnvironment: FeedbackEnvironment = {
  NODE_ENV: 'development',
  FEEDBACK_DATABASE_URL: 'postgres://localhost',
  RABBIT_MQ_URLS: 'amqp://localhost',
  RABBIT_MQ_FEEDBACK_QUEUE: 'feedback',
  RABBIT_MQ_IDENTITY_QUEUE: 'identity',
};
