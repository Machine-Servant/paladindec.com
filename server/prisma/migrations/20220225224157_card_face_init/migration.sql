/*
  Warnings:

  - You are about to drop the `CardFaces` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CardFaces" DROP CONSTRAINT "CardFaces_cardId_fkey";

-- DropTable
DROP TABLE "CardFaces";

-- CreateTable
CREATE TABLE "CardFace" (
    "id" UUID NOT NULL,
    "cardId" UUID NOT NULL,
    "artist" TEXT,
    "cmc" DECIMAL(65,30),
    "colorIndicator" TEXT[],
    "colors" TEXT[],
    "flavorText" TEXT,
    "illustrationId" UUID,
    "imageUris" JSONB,
    "layout" TEXT,
    "loyalty" TEXT,
    "manaCost" TEXT,
    "name" TEXT NOT NULL,
    "oracleId" UUID,
    "oracleText" TEXT,
    "power" TEXT,
    "printedName" TEXT,
    "printedText" TEXT,
    "printedTypeLine" TEXT,
    "toughness" TEXT,
    "typeLine" TEXT,
    "watermark" TEXT,

    CONSTRAINT "CardFace_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CardFace" ADD CONSTRAINT "CardFace_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
