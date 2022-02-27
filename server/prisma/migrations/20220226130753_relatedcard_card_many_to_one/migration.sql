/*
  Warnings:

  - You are about to drop the `_CardToRelatedCard` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `cardId` to the `RelatedCard` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_CardToRelatedCard" DROP CONSTRAINT "_CardToRelatedCard_A_fkey";

-- DropForeignKey
ALTER TABLE "_CardToRelatedCard" DROP CONSTRAINT "_CardToRelatedCard_B_fkey";

-- AlterTable
ALTER TABLE "RelatedCard" ADD COLUMN     "cardId" UUID NOT NULL;

-- DropTable
DROP TABLE "_CardToRelatedCard";

-- AddForeignKey
ALTER TABLE "RelatedCard" ADD CONSTRAINT "RelatedCard_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE SET NULL ON UPDATE CASCADE;
