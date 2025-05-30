/*
  Warnings:

  - Added the required column `hashedFeatureFlagApiKey` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "hashedFeatureFlagApiKey" TEXT NOT NULL,
ALTER COLUMN "isBugReportsEnabled" DROP DEFAULT,
ALTER COLUMN "isFeatureRequestsEnabled" DROP DEFAULT,
ALTER COLUMN "isFeatureFeedbackEnabled" DROP DEFAULT,
ALTER COLUMN "isOwnerUpdatesEnabled" DROP DEFAULT,
ALTER COLUMN "isOwnerIssuesEnabled" DROP DEFAULT,
ALTER COLUMN "isUserIssuesEnabled" DROP DEFAULT;
