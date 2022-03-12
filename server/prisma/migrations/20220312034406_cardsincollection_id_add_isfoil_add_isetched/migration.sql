/*
  Warnings:

  - The primary key for the `CardsInCollection` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "CardsInCollection" DROP CONSTRAINT "CardsInCollection_pkey",
ADD CONSTRAINT "CardsInCollection_pkey" PRIMARY KEY ("cardId", "collectionId", "isFoil", "isEtched");
