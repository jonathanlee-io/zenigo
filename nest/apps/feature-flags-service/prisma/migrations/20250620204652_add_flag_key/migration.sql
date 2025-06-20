/*
  Warnings:

  - Added the required column `key` to the `FeatureFlag` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FeatureFlag" ADD COLUMN     "key" TEXT NOT NULL;
