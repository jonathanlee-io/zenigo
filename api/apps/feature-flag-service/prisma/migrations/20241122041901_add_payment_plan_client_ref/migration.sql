-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_paymentPlanId_fkey" FOREIGN KEY ("paymentPlanId") REFERENCES "PaymentPlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
