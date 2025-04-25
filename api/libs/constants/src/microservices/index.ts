export * from './feedback-service';
export * from './feature-flags-service';
export * from './identity-service';

export interface MicroservicesConstants<
  TCategory extends string,
  TKeys extends string,
  TPattern extends string,
> {
  queueName: string;
  messagePatterns: {
    [K in TCategory]: Record<TKeys, TPattern>;
  };
}
