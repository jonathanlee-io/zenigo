import {MicroservicesConstants} from '@app/constants/microservices';

type MessageCategories = 'embedScripts';

type MessageKeys = 'getBootstrapScript' | 'getWidgetScript';

type MessagePatterns = 'GET_BOOTSTRAP_SCRIPT' | 'GET_WIDGET_SCRIPT';

export const identityServiceConstants: MicroservicesConstants<
  MessageCategories,
  MessageKeys,
  MessagePatterns
> = {
  queueName: 'IDENTITY',
  messagePatterns: {
    embedScripts: {
      getBootstrapScript: 'GET_BOOTSTRAP_SCRIPT',
      getWidgetScript: 'GET_WIDGET_SCRIPT',
    },
  },
};
