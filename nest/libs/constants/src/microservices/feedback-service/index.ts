export const feedbackServiceConstants = {
  queueName: 'FEEDBACK',
  messagePatterns: {
    embedScripts: {
      getBootstrapScript: 'GET_BOOTSTRAP_SCRIPT',
      getWidgetScript: 'GET_WIDGET_SCRIPT',
    },
    products: {
      submitFeedback: 'SUBMIT_FEEDBACK',
      getConfig: 'GET_CONFIG',
      getFeedbackForProductById: 'GET_FEEDBACK_FOR_PRODUCT_BY_ID',
    },
  },
} as const;
