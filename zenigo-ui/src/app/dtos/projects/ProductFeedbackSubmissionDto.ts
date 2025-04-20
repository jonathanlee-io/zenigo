export interface ProductFeedbackSubmissionDto {
  id: string;
  createdAt: string;
  updatedAt: string;
  submittedAt: string;
  productId: string;
  clientIp: string;
  clientSubdomain: string;
  widgetMetadataType: string;
  widgetMetadataUrl: string;
  widgetMetadataTimezone: string;
  userFeedback: string;
}
