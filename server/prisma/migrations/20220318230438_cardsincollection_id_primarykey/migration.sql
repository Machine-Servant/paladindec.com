/*
  Warnings:

  - The primary key for the `CardsInCollection` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[cardId,collectionId,isFoil,isEtched]` on the table `CardsInCollection` will be added. If there are existing duplicate values, this will fail.
  - Made the column `id` on table `CardsInCollection` required. This step will fail if there are existing NULL values in that column.

*/
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- AlterTable
ALTER TABLE "CardsInCollection" DROP COLUMN IF EXISTS "id";
ALTER TABLE "CardsInCollection" DROP CONSTRAINT IF EXISTS "CardsInCollection_pkey";
ALTER TABLE "CardsInCollection" ADD COLUMN "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4();

-- CreateIndex
CREATE UNIQUE INDEX "CardsInCollection_cardId_collectionId_isFoil_isEtched_key" ON "CardsInCollection"("cardId", "collectionId", "isFoil", "isEtched");