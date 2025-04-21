-- AlterTable
ALTER TABLE "User" ADD COLUMN     "clientId" TEXT;

-- CreateTable
CREATE TABLE "_membersOfClient" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_adminsOfClient" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_membersOfClient_AB_unique" ON "_membersOfClient"("A", "B");

-- CreateIndex
CREATE INDEX "_membersOfClient_B_index" ON "_membersOfClient"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_adminsOfClient_AB_unique" ON "_adminsOfClient"("A", "B");

-- CreateIndex
CREATE INDEX "_adminsOfClient_B_index" ON "_adminsOfClient"("B");

-- AddForeignKey
ALTER TABLE "_membersOfClient" ADD CONSTRAINT "_membersOfClient_A_fkey" FOREIGN KEY ("A") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_membersOfClient" ADD CONSTRAINT "_membersOfClient_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_adminsOfClient" ADD CONSTRAINT "_adminsOfClient_A_fkey" FOREIGN KEY ("A") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_adminsOfClient" ADD CONSTRAINT "_adminsOfClient_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
