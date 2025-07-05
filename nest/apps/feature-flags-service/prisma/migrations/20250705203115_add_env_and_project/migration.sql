/*
  Warnings:

  - Added the required column `email` to the `ClientSideIdentity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ClientSideIdentity" ADD COLUMN     "email" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "FeatureFlagProject" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clientId" TEXT NOT NULL,

    CONSTRAINT "FeatureFlagProject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FeatureFlagEnvironment" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "projectId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "apiKey" TEXT NOT NULL,

    CONSTRAINT "FeatureFlagEnvironment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FeatureFlagEnvironment" ADD CONSTRAINT "FeatureFlagEnvironment_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "FeatureFlagProject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
