export interface CreateProjectDto {
  clientId: string;
  name: string;
  subdomain: string;
  isBugReportsEnabled: boolean;
  isFeatureRequestsEnabled: boolean;
  isFeatureFeedbackEnabled: boolean;
}
