/*
  Warnings:

  - You are about to drop the column `isEtched` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `isFoil` on the `Card` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Card" DROP COLUMN "isEtched",
DROP COLUMN "isFoil";

-- AlterTable
ALTER TABLE "CardsInCollection" ADD COLUMN     "isEtched" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isFoil" BOOLEAN NOT NULL DEFAULT false;
