export interface ProjectDto {
  id: string;
  name: string;
  isBugReportsEnabled: boolean;
  isFeatureRequestsEnabled: boolean;
  isFeatureFeedbackEnabled: boolean;
  subdomains: string[];
  hostnames: string[];
  client: {
    displayName: string;
  };
  clientId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}
