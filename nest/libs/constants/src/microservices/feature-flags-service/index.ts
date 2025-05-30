export const featureFlagServiceConstants = {
  queueName: 'FEATURE_FLAGS',
  messagePatterns: {
    featureFlags: {
      getAllFlagStates: 'GET_ALL_FLAG_STATES',
    },
  },
} as const;
