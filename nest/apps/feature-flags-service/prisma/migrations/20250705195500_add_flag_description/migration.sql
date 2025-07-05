/*
  Warnings:

  - Added the required column `description` to the `FeatureFlag` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FeatureFlag" ADD COLUMN     "description" TEXT NOT NULL;
