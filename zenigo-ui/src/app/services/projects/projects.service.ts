import {HttpClient} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';

import {TenantStore} from '../../+state/tenant/tenant.store';
import {CreateProjectDto} from '../../dtos/projects/CreateProject.dto';
import {ProductFeedbackSubmissionDto} from '../../dtos/projects/ProductFeedbackSubmissionDto';
import {ProjectDto} from '../../dtos/projects/Project.dto';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private readonly httpClient = inject(HttpClient);
  private readonly tenantStore = inject(TenantStore);

  fetchProjectsWhereInvolved() {
    return this.httpClient.get<ProjectDto[]>(this.tenantStore.getFullRequestUrl('v1/projects/where-involved'));
  }

  fetchProjectsForClient(clientId: string) {
    return this.httpClient.get<ProjectDto[]>(this.tenantStore.getFullRequestUrl(`v1/projects/for-client/${clientId}`));
  }

  fetchProjectById(projectId: string) {
    return this.httpClient.get<ProjectDto>(this.tenantStore.getFullRequestUrl(`v1/projects/${projectId}`));
  }

  updateProjectById(projectId: string, project: ProjectDto) {
    return this.httpClient.put<ProjectDto>(this.tenantStore.getFullRequestUrl(`v1/projects/${projectId}`), project);
  }

  createProjectForExistingClient(clientId: string, project: CreateProjectDto) {
    return this.httpClient.post<ProjectDto>(this.tenantStore.getFullRequestUrl(`v1/projects/for-client/${clientId}`), project);
  }

  deleteProjectById(projectId: string) {
    return this.httpClient.delete<ProjectDto>(this.tenantStore.getFullRequestUrl(`v1/projects/${projectId}`));
  }

  fetchProductFeedbackForProjectById(projectId: string, offset?: number) {
    return this.httpClient.get<{total: number, rows: ProductFeedbackSubmissionDto[]}>(this.tenantStore.getFullRequestUrl(`v1/products/feedback/${projectId}?offset=${offset ?? 0}&limit=5`));
  }
}
