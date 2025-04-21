/*
  Warnings:

  - The values [USER_UPDATE] on the enum `ProductPostType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ProductPostType_new" AS ENUM ('OWNER_UPDATE', 'OWNER_ISSUE', 'USER_ISSUE');
ALTER TABLE "ProductPost" ALTER COLUMN "type" TYPE "ProductPostType_new" USING ("type"::text::"ProductPostType_new");
ALTER TYPE "ProductPostType" RENAME TO "ProductPostType_old";
ALTER TYPE "ProductPostType_new" RENAME TO "ProductPostType";
DROP TYPE "ProductPostType_old";
COMMIT;

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "isOwnerIssuesEnabled" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isOwnerUpdatesEnabled" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "isUserIssuesEnabled" BOOLEAN NOT NULL DEFAULT false;
