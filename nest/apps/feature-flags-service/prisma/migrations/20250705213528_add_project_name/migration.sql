/*
  Warnings:

  - Added the required column `name` to the `FeatureFlagProject` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FeatureFlagProject" ADD COLUMN     "name" TEXT NOT NULL;
