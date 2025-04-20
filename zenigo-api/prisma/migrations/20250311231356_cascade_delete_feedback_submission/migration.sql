-- DropForeignKey
ALTER TABLE "ProductFeedbackSubmission" DROP CONSTRAINT "ProductFeedbackSubmission_productId_fkey";

-- AddForeignKey
ALTER TABLE "ProductFeedbackSubmission" ADD CONSTRAINT "ProductFeedbackSubmission_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
