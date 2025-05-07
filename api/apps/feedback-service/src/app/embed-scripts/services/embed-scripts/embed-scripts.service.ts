import fs from 'node:fs';
import path from 'node:path';

import {identityServiceConstants} from '@app/constants';
import {MicroserviceSendResult, ProjectDto} from '@app/dto';
import {HttpStatus, Inject, Injectable, Logger} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import {ClientProxy} from '@nestjs/microservices';
import {firstValueFrom} from 'rxjs';

import {FeedbackEnvironment} from '../../../../config/environment';

@Injectable()
export class EmbedScriptsService {
  constructor(
    private readonly logger: Logger,
    private readonly configService: ConfigService<FeedbackEnvironment>,
    @Inject(identityServiceConstants.queueName)
    private readonly identityClient: ClientProxy,
  ) {}

  async getBootstrapWidgetScript({
    clientSubdomain,
  }: {
    clientSubdomain: string;
  }): Promise<MicroserviceSendResult<string>> {
    try {
      const getProjectResult = await firstValueFrom(
        this.identityClient.send<
          MicroserviceSendResult<ProjectDto>,
          {clientSubdomain: string}
        >(
          identityServiceConstants.messagePatterns.projects
            .getProjectByClientSubdomain,
          {
            clientSubdomain,
          },
        ),
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
    } catch (err) {
      this.logger.error(err);
      return null;
    }
  }

  async getWidgetScript() {
    return fs.readFileSync(
      path.join(__dirname, '../../../../..', 'widget/dist/echonexus-widget.js'),
      'utf8',
    );
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
