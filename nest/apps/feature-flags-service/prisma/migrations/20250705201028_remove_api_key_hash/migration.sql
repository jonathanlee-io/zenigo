/*
  Warnings:

  - You are about to drop the column `hashedApiKey` on the `FeatureFlag` table. All the data in the column will be lost.
  - Added the required column `apiKey` to the `FeatureFlag` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FeatureFlag" DROP COLUMN "hashedApiKey",
ADD COLUMN     "apiKey" TEXT NOT NULL;
