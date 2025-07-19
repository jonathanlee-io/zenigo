import {HttpClient} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';

import {environment} from '../../../environments/environment';
import {CreateFeatureFlagProjectResponseDto} from '../../dtos/feature-flags/CreateFeatureFlagProjectResponse.dto';

@Injectable({
  providedIn: 'root',
})
export class FeatureFlagsService {
  private readonly httpClient = inject(HttpClient);

  createFeatureFlagProject(createFeatureFlagProjectDto: { projectName: string; clientId: string }) {
    return this.httpClient.post<CreateFeatureFlagProjectResponseDto>(`${environment.FEATURE_FLAGS_SERVICE_BASE_URL}/projects`, createFeatureFlagProjectDto);
  }
}
