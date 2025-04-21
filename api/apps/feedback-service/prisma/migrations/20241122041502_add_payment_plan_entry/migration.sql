-- CreateTable
CREATE TABLE "PaymentPlan" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "monthlyTotal" TEXT NOT NULL,
    "maxTeamMembers" TEXT NOT NULL,
    "maxProjects" TEXT NOT NULL,
    "features" TEXT[],
    "stripePricingTableId" TEXT NOT NULL,
    "stripePublishableKey" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PaymentPlan_pkey" PRIMARY KEY ("id")
);
