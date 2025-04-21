/*
  Warnings:

  - You are about to drop the column `description` on the `Client` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Client" DROP COLUMN "description";

-- AlterTable
ALTER TABLE "PaymentPlan" ALTER COLUMN "description" DROP DEFAULT,
ALTER COLUMN "monthlyPrice" DROP DEFAULT;
