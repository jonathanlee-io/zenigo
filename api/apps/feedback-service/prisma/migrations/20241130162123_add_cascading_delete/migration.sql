-- DropForeignKey
ALTER TABLE "Hostname" DROP CONSTRAINT "Hostname_projectId_fkey";

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_clientId_fkey";

-- DropForeignKey
ALTER TABLE "Subdomain" DROP CONSTRAINT "Subdomain_projectId_fkey";

-- AlterTable
ALTER TABLE "_adminsOfClient" ADD CONSTRAINT "_adminsOfClient_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_adminsOfClient_AB_unique";

-- AlterTable
ALTER TABLE "_membersOfClient" ADD CONSTRAINT "_membersOfClient_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_membersOfClient_AB_unique";

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subdomain" ADD CONSTRAINT "Subdomain_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hostname" ADD CONSTRAINT "Hostname_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
