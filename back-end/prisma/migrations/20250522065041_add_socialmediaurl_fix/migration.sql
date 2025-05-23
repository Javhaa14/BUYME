/*
  Warnings:

  - You are about to drop the column `socialMEdiaURL` on the `Profile` table. All the data in the column will be lost.
  - Added the required column `socialMediaURL` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Donation" ALTER COLUMN "specialMessage" DROP NOT NULL;

-- AlterTable
-- Step 1: Add the column as nullable
ALTER TABLE "Profile" ADD COLUMN "socialMediaURL" TEXT;

-- Step 2: Fill in default value for existing rows
UPDATE "Profile" SET "socialMediaURL" = 'https://example.com' WHERE "socialMediaURL" IS NULL;

-- Step 3: Make the column required
ALTER TABLE "Profile" ALTER COLUMN "socialMediaURL" SET NOT NULL;


-- AddForeignKey
ALTER TABLE "Donation" ADD CONSTRAINT "Donation_donorID_fkey" FOREIGN KEY ("donorID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bankcard" ADD CONSTRAINT "Bankcard_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
