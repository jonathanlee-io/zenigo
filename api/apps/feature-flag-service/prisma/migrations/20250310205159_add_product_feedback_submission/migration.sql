-- CreateEnum
CREATE TYPE "ProductFeedbackSubmissionType" AS ENUM ('BUG_REPORT', 'FEATURE_REQUEST', 'FEATURE_FEEDBACK');

-- CreateTable
CREATE TABLE "ProductFeedbackSubmission" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "productId" TEXT NOT NULL,
    "clientIp" TEXT NOT NULL,
    "clientSubdomain" TEXT NOT NULL,
    "widgetMetadataType" "ProductFeedbackSubmissionType" NOT NULL,
    "widgetMetadataUrl" TEXT NOT NULL,
    "widgetMetadataTimezone" TEXT NOT NULL,
    "submittedAt" TIMESTAMP(3) NOT NULL,
    "userFeedback" TEXT NOT NULL,

    CONSTRAINT "ProductFeedbackSubmission_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProductFeedbackSubmission_productId_key" ON "ProductFeedbackSubmission"("productId");

-- AddForeignKey
ALTER TABLE "ProductFeedbackSubmission" ADD CONSTRAINT "ProductFeedbackSubmission_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
