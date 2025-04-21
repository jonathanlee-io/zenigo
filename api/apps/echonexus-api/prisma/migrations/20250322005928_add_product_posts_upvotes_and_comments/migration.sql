-- CreateEnum
CREATE TYPE "ProductPostType" AS ENUM ('OWNER_UPDATE', 'OWNER_ISSUE', 'USER_UPDATE', 'USER_ISSUE');

-- CreateTable
CREATE TABLE "ProductPost" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" "ProductPostType" NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "ProductPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductPostUpvote" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "productPostId" TEXT,
    "userId" TEXT,

    CONSTRAINT "ProductPostUpvote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductPostComment" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "text" TEXT NOT NULL,
    "productPostId" TEXT,
    "userId" TEXT,

    CONSTRAINT "ProductPostComment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProductPost_productId_key" ON "ProductPost"("productId");

-- AddForeignKey
ALTER TABLE "ProductPost" ADD CONSTRAINT "ProductPost_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductPostUpvote" ADD CONSTRAINT "ProductPostUpvote_productPostId_fkey" FOREIGN KEY ("productPostId") REFERENCES "ProductPost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductPostUpvote" ADD CONSTRAINT "ProductPostUpvote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductPostComment" ADD CONSTRAINT "ProductPostComment_productPostId_fkey" FOREIGN KEY ("productPostId") REFERENCES "ProductPost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductPostComment" ADD CONSTRAINT "ProductPostComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
