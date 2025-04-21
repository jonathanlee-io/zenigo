/*
  Warnings:

  - You are about to drop the column `clientId` on the `Hostname` table. All the data in the column will be lost.
  - You are about to drop the column `clientId` on the `Subdomain` table. All the data in the column will be lost.
  - You are about to drop the column `issueSectionId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `releaseId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Epic` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Issue` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `IssueSection` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Release` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Sprint` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[hostname]` on the table `Hostname` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `hostname` to the `Hostname` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Epic" DROP CONSTRAINT "Epic_projectId_fkey";

-- DropForeignKey
ALTER TABLE "Hostname" DROP CONSTRAINT "Hostname_clientId_fkey";

-- DropForeignKey
ALTER TABLE "Issue" DROP CONSTRAINT "Issue_epicId_fkey";

-- DropForeignKey
ALTER TABLE "Issue" DROP CONSTRAINT "Issue_issueSectionId_fkey";

-- DropForeignKey
ALTER TABLE "Issue" DROP CONSTRAINT "Issue_releaseId_fkey";

-- DropForeignKey
ALTER TABLE "Issue" DROP CONSTRAINT "Issue_sprintId_fkey";

-- DropForeignKey
ALTER TABLE "Issue" DROP CONSTRAINT "Issue_userId_fkey";

-- DropForeignKey
ALTER TABLE "Subdomain" DROP CONSTRAINT "Subdomain_clientId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_issueSectionId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_releaseId_fkey";

-- AlterTable
ALTER TABLE "Hostname" DROP COLUMN "clientId",
ADD COLUMN     "hostname" TEXT NOT NULL,
ADD COLUMN     "projectId" TEXT;

-- AlterTable
ALTER TABLE "Subdomain" DROP COLUMN "clientId",
ADD COLUMN     "projectId" TEXT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "issueSectionId",
DROP COLUMN "releaseId";

-- DropTable
DROP TABLE "Epic";

-- DropTable
DROP TABLE "Issue";

-- DropTable
DROP TABLE "IssueSection";

-- DropTable
DROP TABLE "Release";

-- DropTable
DROP TABLE "Sprint";

-- CreateIndex
CREATE UNIQUE INDEX "Hostname_hostname_key" ON "Hostname"("hostname");

-- AddForeignKey
ALTER TABLE "Subdomain" ADD CONSTRAINT "Subdomain_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hostname" ADD CONSTRAINT "Hostname_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
