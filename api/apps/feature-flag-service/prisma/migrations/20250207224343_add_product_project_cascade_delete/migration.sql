-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_projectId_fkey";

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
