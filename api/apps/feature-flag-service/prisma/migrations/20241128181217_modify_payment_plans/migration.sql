/*
  Warnings:

  - You are about to drop the column `maxProjects` on the `PaymentPlan` table. All the data in the column will be lost.
  - You are about to drop the column `maxTeamMembers` on the `PaymentPlan` table. All the data in the column will be lost.
  - You are about to drop the column `monthlyTotal` on the `PaymentPlan` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PaymentPlan" DROP COLUMN "maxProjects",
DROP COLUMN "maxTeamMembers",
DROP COLUMN "monthlyTotal",
ADD COLUMN     "description" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "monthlyPrice" TEXT NOT NULL DEFAULT '$9999.99',
ADD COLUMN     "tag" TEXT;
