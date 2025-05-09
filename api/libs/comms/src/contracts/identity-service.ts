import {Message} from '@app/comms';
import {identityServiceConstants} from '@app/constants';
import {MicroserviceSendResult, ProjectDto} from '@app/dto';

export interface IdentityServiceContract {
  [identityServiceConstants.messagePatterns.projects
    .getProjectByClientSubdomain]: Message<
    {clientSubdomain: string},
    MicroserviceSendResult<ProjectDto | null>
  >;

  [identityServiceConstants.messagePatterns.projects.getProjectById]: Message<
    {projectId: string},
    MicroserviceSendResult<ProjectDto | null>
  >;
}
