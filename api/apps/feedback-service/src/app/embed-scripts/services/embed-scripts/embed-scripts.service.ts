import * as fs from 'node:fs';
import * as path from 'node:path';

import {
  IDENTITY_SERVICE,
  IDENTITY_SERVICE_QUEUE,
  IdentityServiceContract,
  TypedClientProxy,
} from '@app/comms';
import {MicroserviceSendResult} from '@app/dto';
import {HttpStatus, Inject, Injectable, Logger} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import {ClientProxy} from '@nestjs/microservices';

import {FeedbackEnvironment} from '../../../../config/environment';

@Injectable()
export class EmbedScriptsService {
  private readonly identityClient: TypedClientProxy<
    keyof IdentityServiceContract,
    IdentityServiceContract
  >;

  constructor(
    private readonly logger: Logger,
    private readonly configService: ConfigService<FeedbackEnvironment>,
    @Inject(IDENTITY_SERVICE_QUEUE)
    readonly untypedIdentityClientProxy: ClientProxy,
  ) {
    this.identityClient = new TypedClientProxy<
      keyof IdentityServiceContract,
      IdentityServiceContract
    >(this.untypedIdentityClientProxy);
  }

  async getBootstrapWidgetScript({
    clientSubdomain,
    clientIp,
  }: {
    clientSubdomain: string;
    clientIp: string;
  }): Promise<MicroserviceSendResult<string>> {
    const getProjectResult = await this.identityClient.sendAsync(
      IDENTITY_SERVICE.GET_PROJECT_BY_CLIENT_SUBDOMAIN,
      {clientSubdomain, clientIp, data: null as never},
    );
    if (getProjectResult.status !== HttpStatus.OK) {
      return null;
    }
    return {
      status: HttpStatus.OK,
      data: await this.generateWidgetBootstrapScript({
        clientSubdomain,
        returnedProject: getProjectResult.data,
      }),
    };
  }

  async getWidgetScript(): Promise<MicroserviceSendResult<string | null>> {
    const widgetContents = fs.readFileSync(
      path.join(__dirname, '../../..', 'widget/dist/echonexus-widget.js'),
      'utf8',
    );

    return {
      status: widgetContents ? HttpStatus.OK : HttpStatus.INTERNAL_SERVER_ERROR,
      data: widgetContents,
    };
  }

  private async generateWidgetBootstrapScript({
    clientSubdomain,
    returnedProject,
  }: {
    clientSubdomain: string;
    returnedProject: unknown;
  }) {
    let widgetSrc: string;
    if (this.configService.getOrThrow('NODE_ENV') === 'production') {
      widgetSrc = `https://${clientSubdomain}.api.zenigo.io/v1/scripts/echonexus-widget.js`;
    } else if (this.configService.getOrThrow('NODE_ENV') === 'staging') {
      widgetSrc = `https://${clientSubdomain}.api.zenigo-staging.com/v1/scripts/echonexus-widget.js`;
    } else {
      widgetSrc = `http://${clientSubdomain}.api.zenigo-local.io:8000/v1/scripts/echonexus-widget.js`;
    }

    let paramProject = {};
    if (returnedProject && typeof returnedProject === 'object') {
      paramProject = {...returnedProject, subdomain: clientSubdomain};
    }

    return `
        (function (w,d,s,o,f,js,fjs) {
            w['JS-Widget']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
            js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
            js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
        }(window, document, 'script', 'mw', '${widgetSrc}'));
        mw('init', { project: ${returnedProject ? JSON.stringify(paramProject) : null} } );
        mw('message', { project: ${returnedProject ? JSON.stringify(paramProject) : null} });
    `;
  }
}
