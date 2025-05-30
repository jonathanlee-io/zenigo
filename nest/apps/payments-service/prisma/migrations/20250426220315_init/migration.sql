-- CreateTable
CREATE TABLE "PaymentPlan" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "monthlyPrice" TEXT NOT NULL,
    "maxProjectCount" INTEGER NOT NULL DEFAULT 0,
    "maxTeamMemberCount" INTEGER NOT NULL DEFAULT 0,
    "isCustomSubdomainIncluded" BOOLEAN NOT NULL DEFAULT true,
    "isEmbeddableFeedbackWidgetIncluded" BOOLEAN NOT NULL DEFAULT true,
    "isCustomHostnameIncluded" BOOLEAN NOT NULL DEFAULT false,
    "tag" TEXT,
    "sortIndex" INTEGER NOT NULL DEFAULT 0,
    "stripePricingTableId" TEXT NOT NULL,
    "stripePublishableKey" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PaymentPlan_pkey" PRIMARY KEY ("id")
);
