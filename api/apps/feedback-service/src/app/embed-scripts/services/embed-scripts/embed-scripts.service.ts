import {Injectable} from '@nestjs/common';

@Injectable()
export class EmbedScriptsService {
  async getBootstrapWidgetScript({clientSubdomain}: {clientSubdomain: string}) {
    return `console.log('${clientSubdomain}')`;
  }

  async getWidgetScript() {
    return `console.log('widget')`;
  }
}
