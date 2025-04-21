-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "isBugReportsEnabled" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "isFeatureFeedbackEnabled" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "isFeatureRequestsEnabled" BOOLEAN NOT NULL DEFAULT true;
