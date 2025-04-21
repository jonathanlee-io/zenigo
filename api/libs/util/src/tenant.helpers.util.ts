import {NodeEnvironment} from '@app/config/environment';

export const getUrlFromNodeEnv = (
  nodeEnv: NodeEnvironment,
  subdomain: string,
) => {
  if (nodeEnv === 'production') {
    return `https://${subdomain}.zenigo.io`;
  } else if (nodeEnv === 'staging') {
    return `https://${subdomain}.staging.zenigo.io`;
  } else if (nodeEnv === 'development') {
    return `http://${subdomain}.local.zenigo.io`;
  }
  // Otherwise assume test
  return `https://${subdomain}.test.zenigo.io`;
};
