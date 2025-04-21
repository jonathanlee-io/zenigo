-- AlterTable
ALTER TABLE "Issue" ADD COLUMN     "issueSectionId" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "issueSectionId" TEXT;

-- CreateTable
CREATE TABLE "IssueSection" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isOpen" BOOLEAN NOT NULL,

    CONSTRAINT "IssueSection_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_issueSectionId_fkey" FOREIGN KEY ("issueSectionId") REFERENCES "IssueSection"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Issue" ADD CONSTRAINT "Issue_issueSectionId_fkey" FOREIGN KEY ("issueSectionId") REFERENCES "IssueSection"("id") ON DELETE SET NULL ON UPDATE CASCADE;
