/*
  Warnings:

  - Added the required column `isEnabledOverrideValue` to the `UserSegmentOverrides` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserSegmentOverrides" ADD COLUMN     "isEnabledOverrideValue" BOOLEAN NOT NULL;
