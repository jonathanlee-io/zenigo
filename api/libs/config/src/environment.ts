export type NodeEnvironment = 'production' | 'staging' | 'development';

export type EnvironmentVariables = {
  EMAIL_USER: string;
  EMAIL_PASSWORD: string;
  STRIPE_API_KEY: string;
  STRIPE_WEBHOOK_URL: string;
  STRIPE_WEBHOOK_SECRET: string;
  RESEND_API_KEY: string;
};
