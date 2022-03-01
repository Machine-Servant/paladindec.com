/*
  Warnings:

  - You are about to drop the `ScryfallCardsInCollection` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[currentPriceOfCardId]` on the table `ScryfallPrice` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "ScryfallCardsInCollection" DROP CONSTRAINT "ScryfallCardsInCollection_cardId_fkey";

-- DropForeignKey
ALTER TABLE "ScryfallCardsInCollection" DROP CONSTRAINT "ScryfallCardsInCollection_collectionId_fkey";

-- DropIndex
DROP INDEX "ScryfallCard_name_idx";

-- AlterTable
ALTER TABLE "ScryfallPrice" ADD COLUMN     "currentPriceOfCardId" UUID;

-- DropTable
DROP TABLE "ScryfallCardsInCollection";

-- CreateTable
CREATE TABLE "Card" (
    "id" UUID NOT NULL,
    "scryfallCardId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CardsInCollection" (
    "cardId" UUID NOT NULL,
    "collectionId" UUID NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CardsInCollection_pkey" PRIMARY KEY ("cardId","collectionId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Card_scryfallCardId_key" ON "Card"("scryfallCardId");

-- CreateIndex
CREATE INDEX "Card_scryfallCardId_idx" ON "Card"("scryfallCardId");

-- CreateIndex
CREATE UNIQUE INDEX "ScryfallPrice_currentPriceOfCardId_key" ON "ScryfallPrice"("currentPriceOfCardId");

-- AddForeignKey
ALTER TABLE "ScryfallPrice" ADD CONSTRAINT "ScryfallPrice_currentPriceOfCardId_fkey" FOREIGN KEY ("currentPriceOfCardId") REFERENCES "Card"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_scryfallCardId_fkey" FOREIGN KEY ("scryfallCardId") REFERENCES "ScryfallCard"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardsInCollection" ADD CONSTRAINT "CardsInCollection_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardsInCollection" ADD CONSTRAINT "CardsInCollection_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE CASCADE ON UPDATE CASCADE;
