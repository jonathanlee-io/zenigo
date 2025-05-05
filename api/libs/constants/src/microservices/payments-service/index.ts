export const paymentsServiceConstants = {
  queueName: 'PAYMENTS',
  messagePatterns: {
    payments: {
      getPaymentStatusForClientBySubdomain:
        'GET_PAYMENT_STATUS_FOR_CLIENT_BY_SUBDOMAIN',
    },
  },
} as const;
