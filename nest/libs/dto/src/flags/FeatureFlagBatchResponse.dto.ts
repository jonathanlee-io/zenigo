export interface FeatureFlagBatchResponseDto {
  flags: {key: string; isActive: boolean}[];
}
