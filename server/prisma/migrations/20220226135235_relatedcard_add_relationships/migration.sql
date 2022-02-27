/*
  Warnings:

  - Added the required column `referenceId` to the `RelatedCard` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "RelatedCard" DROP CONSTRAINT "RelatedCard_cardId_fkey";

-- AlterTable
ALTER TABLE "RelatedCard" ADD COLUMN     "referenceId" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "RelatedCard" ADD CONSTRAINT "RelatedCard_referenceId_fkey" FOREIGN KEY ("referenceId") REFERENCES "Card"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RelatedCard" ADD CONSTRAINT "RelatedCard_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE CASCADE ON UPDATE CASCADE;
