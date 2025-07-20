import {IDENTITY_SERVICE} from '@app/comms';
import {
  AnonymousMicroserviceControllerPayload,
  AuthenticatedMicroserviceControllerPayload,
} from '@app/dto';
import {CreateProjectDto} from '@app/dto/identity/CreateProject.dto';
import {Controller} from '@nestjs/common';
import {MessagePattern, Payload} from '@nestjs/microservices';

import {ProjectsService} from '../../services/projects/projects.service';

@Controller()
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @MessagePattern(IDENTITY_SERVICE.GET_PROJECT_BY_CLIENT_SUBDOMAIN)
  async getProjectFromSubdomain(
    @Payload() {clientSubdomain}: AnonymousMicroserviceControllerPayload<never>,
  ) {
    return this.projectsService.getProjectFromSubdomain(clientSubdomain);
  }

  @MessagePattern(IDENTITY_SERVICE.GENERATE_AND_STORE_API_KEY)
  async generateAndStoreApiKey(
    @Payload()
    {
      clientSubdomain,
      authenticatedUser: {email: requestingUserEmail},
      data: {prefixCharacters},
    }: AuthenticatedMicroserviceControllerPayload<{
      prefixCharacters: string;
    }>,
  ) {
    return this.projectsService.generateAndStoreApiKey({
      requestingUserEmail,
      clientSubdomain,
      prefixCharacters,
    });
  }

  @MessagePattern(IDENTITY_SERVICE.CREATE_PROJECT)
  async registerNewProject(
    @Payload()
    {
      authenticatedUser: {email: requestingUserEmail},
      data: createProjectDto,
    }: AuthenticatedMicroserviceControllerPayload<CreateProjectDto>,
  ) {
    return this.projectsService.createProject(
      {
        requestingUserEmail,
      },
      createProjectDto,
    );
  }
}
