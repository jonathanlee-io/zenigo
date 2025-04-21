-- AlterTable
ALTER TABLE "PaymentPlan" ADD COLUMN     "isCustomHostnameIncluded" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isCustomSubdomainIncluded" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "isEmbeddableFeedbackWidgetIncluded" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "maxProjectCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "maxTeamMemberCount" INTEGER NOT NULL DEFAULT 0;
