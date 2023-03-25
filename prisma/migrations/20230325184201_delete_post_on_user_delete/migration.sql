-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_createdById_fkey";

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
