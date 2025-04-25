import {MicroservicesConstants} from '@app/constants/microservices';

type MessageCategories = 'embedScripts';

type MessageKeys = 'getBootstrapScript' | 'getWidgetScript';

type MessagePatterns = 'GET_BOOTSTRAP_SCRIPT' | 'GET_WIDGET_SCRIPT';

export const paymentsServiceConstants: MicroservicesConstants<
  MessageCategories,
  MessageKeys,
  MessagePatterns
> = {
  queueName: 'FEATURE_FLAGS',
  messagePatterns: {
    embedScripts: {
      getBootstrapScript: 'GET_BOOTSTRAP_SCRIPT',
      getWidgetScript: 'GET_WIDGET_SCRIPT',
    },
  },
};
