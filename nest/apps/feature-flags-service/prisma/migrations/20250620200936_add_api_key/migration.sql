/*
  Warnings:

  - Added the required column `hashedApiKey` to the `FeatureFlag` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FeatureFlag" ADD COLUMN     "hashedApiKey" TEXT NOT NULL;
