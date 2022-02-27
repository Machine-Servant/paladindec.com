-- DropForeignKey
ALTER TABLE "CardFace" DROP CONSTRAINT "CardFace_cardId_fkey";

-- AddForeignKey
ALTER TABLE "CardFace" ADD CONSTRAINT "CardFace_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE SET NULL ON UPDATE CASCADE;
