import {HttpClient} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import {of} from 'rxjs';

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
    return of(<ProjectDto[]>[
      {
        id: 'e12d9f8a-3c56-4b9e-8a7d-2f5e8b9c1234',
        name: 'E-Commerce Platform',
        isUserIssuesEnabled: true,
        isOwnerUpdatesEnabled: true,
        isOwnerIssuesEnabled: true,
        isBugReportsEnabled: true,
        isFeatureRequestsEnabled: true,
        isFeatureFeedbackEnabled: false,
        subdomains: [{subdomain: 'ecommerce'}, {subdomain: 'shop'}],
        hostnames: ['shop.example.com'],
        client: {
          displayName: 'Retail Solutions Inc.',
          admins: [
            {id: 'a1b2c3d4-e5f6-4a5b-8c7d-9e8f7a6b5c4d', email: 'admin@retailsolutions.com'},
          ],
          members: [
            {id: 'b2c3d4e5-f6a7-5b6c-9d0e-1f2a3b4c5d6e', email: 'member1@retailsolutions.com'},
            {id: 'c3d4e5f6-a7b8-6c7d-0e1f-2a3b4c5d6e7f', email: 'member2@retailsolutions.com'},
          ],
        },
        clientId: 'd4e5f6a7-b8c9-7d0e-1f2a-3b4c5d6e7f8g',
        userId: 'e5f6a7b8-c9d0-8e1f-2a3b-4c5d6e7f8a9b',
        createdAt: '2023-08-15T10:30:00Z',
        updatedAt: '2024-06-20T14:45:30Z',
      },
      {
        id: 'f23e0a9b-4d67-5c0e-9b8e-3f6f7c0d1235',
        name: 'Healthcare Portal',
        isUserIssuesEnabled: true,
        isOwnerUpdatesEnabled: true,
        isOwnerIssuesEnabled: true,
        isBugReportsEnabled: true,
        isFeatureRequestsEnabled: true,
        isFeatureFeedbackEnabled: true,
        subdomains: [{subdomain: 'healthcare'}, {subdomain: 'medportal'}],
        hostnames: ['portal.healthcare.org'],
        client: {
          displayName: 'MediCare Systems',
          admins: [
            {id: 'f6a7b8c9-d0e1-5f2a-3b4c-5d6e7f8a9b0c', email: 'admin@medicare.org'},
          ],
          members: [
            {id: 'a7b8c9d0-e1f2-6a3b-4c5d-6e7f8a9b0c1d', email: 'doctor@medicare.org'},
            {id: 'b8c9d0e1-f2a3-7b4c-5d6e-7f8a9b0c1d2e', email: 'nurse@medicare.org'},
          ],
        },
        clientId: 'c9d0e1f2-a3b4-8c5d-6e7f-8a9b0c1d2e3f',
        userId: 'd0e1f2a3-b4c5-9d6e-7f8a-9b0c1d2e3f4a',
        createdAt: '2023-10-05T09:15:00Z',
        updatedAt: '2024-06-18T11:20:45Z',
      },
      {
        id: 'a34f1b0c-5e78-6d1f-0c9d-4a5b6c7d1236',
        name: 'Financial Dashboard',
        isUserIssuesEnabled: true,
        isOwnerUpdatesEnabled: true,
        isOwnerIssuesEnabled: true,
        isBugReportsEnabled: false,
        isFeatureRequestsEnabled: true,
        isFeatureFeedbackEnabled: true,
        subdomains: [{subdomain: 'finance'}, {subdomain: 'dashboard'}],
        hostnames: ['finance.corpanalytics.com'],
        client: {
          displayName: 'Corporate Analytics Ltd',
          admins: [
            {id: 'e1f2a3b4-c5d6-6e7f-8a9b-0c1d2e3f4a5b', email: 'cfo@corpanalytics.com'},
          ],
          members: [
            {id: 'f2a3b4c5-d6e7-7f8a-9b0c-1d2e3f4a5b6c', email: 'analyst@corpanalytics.com'},
            {id: 'a3b4c5d6-e7f8-8a9b-0c1d-2e3f4a5b6c7d', email: 'accountant@corpanalytics.com'},
          ],
        },
        clientId: 'b4c5d6e7-f8a9-9b0c-1d2e-3f4a5b6c7d8e',
        userId: 'c5d6e7f8-a9b0-0c1d-2e3f-4a5b6c7d8e9f',
        createdAt: '2024-01-20T15:45:00Z',
        updatedAt: '2024-06-15T09:30:15Z',
      },
      {
        id: 'b45a2c1d-6f89-7e2a-1d0e-5a6b7c8d1237',
        name: 'Educational Platform',
        isUserIssuesEnabled: true,
        isOwnerUpdatesEnabled: true,
        isOwnerIssuesEnabled: true,
        isBugReportsEnabled: true,
        isFeatureRequestsEnabled: false,
        isFeatureFeedbackEnabled: true,
        subdomains: [{subdomain: 'education'}, {subdomain: 'learning'}],
        hostnames: ['learn.educate.io'],
        client: {
          displayName: 'EduTech Solutions',
        },
        clientId: 'a9b0c1d2-e3f4-0a5b-6c7d-8e9f0a1b2c3d',
        userId: 'b0c1d2e3-f4a5-1b6c-7d8e-9f0a1b2c3d4e',
        createdAt: '2023-12-10T12:20:00Z',
        updatedAt: '2024-06-10T16:55:40Z',
      },
      {
        id: 'c56b3d2e-7a90-8f3b-2e1f-6b7c8d9e1238',
        name: 'Travel Booking System',
        isUserIssuesEnabled: true,
        isOwnerUpdatesEnabled: true,
        isOwnerIssuesEnabled: true,
        isBugReportsEnabled: true,
        isFeatureRequestsEnabled: true,
        isFeatureFeedbackEnabled: true,
        subdomains: [{subdomain: 'travel'}, {subdomain: 'booking'}],
        hostnames: ['book.travelexp.net'],
        client: {
          displayName: 'Travel Experiences Co',
          admins: [],
          members: [
            {id: 'd8e9f0a1-b2c3-9d4e-5f6a-7b8c9d0e1f2a', email: 'agent1@travelexp.net'},
            {id: 'e9f0a1b2-c3d4-0e5f-6a7b-8c9d0e1f2a3b', email: 'agent2@travelexp.net'},
          ],
        },
        clientId: 'f0a1b2c3-d4e5-1f6a-7b8c-9d0e1f2a3b4c',
        userId: 'a1b2c3d4-e5f6-2a7b-8c9d-0e1f2a3b4c5d',
        createdAt: '2023-09-25T08:40:00Z',
        updatedAt: '2024-06-05T13:10:20Z',
      },
    ]);
    // return this.httpClient.get<ProjectDto[]>(this.tenantStore.getFullRequestUrl('v1/projects/where-involved'));
  }

  fetchProjectsForClient(clientId: string) {
    console.log(`Fetching projects for client: ${clientId}`);
    return this.fetchProjectsWhereInvolved();
    // return this.httpClient.get<ProjectDto[]>(this.tenantStore.getFullRequestUrl(`v1/projects/for-client/${clientId}`));
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
