export const identityServiceConstants = {
  queueName: 'IDENTITY',
  messagePatterns: {
    projects: {
      getProjectById: 'GET_PROJECT_BY_ID',
      getProjectByClientSubdomain: 'GET_PROJECT_BY_SUBDOMAIN',
    },
  },
} as const;
