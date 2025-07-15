export interface CreateFeatureFlagProjectResponseDto {
  id: string;
  createdAt: string;
  updatedAt: string;
  clientId: string;
  name: string;
  environments: {id: string; createdAt: string; updatedAt: string; projectId: string; name: string; apiKey: string;}[];
}
