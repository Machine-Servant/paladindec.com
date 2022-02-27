/*
  Warnings:

  - The primary key for the `Card` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Set` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `Thing` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `cmc` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `layout` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `oversized` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reserved` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `typeLine` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `id` on the `Card` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `Set` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Card" DROP CONSTRAINT "Card_pkey",
ADD COLUMN     "allParts" JSONB[],
ADD COLUMN     "cardFacesRaw" JSONB[],
ADD COLUMN     "cmc" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "colorIdentity" TEXT[],
ADD COLUMN     "colorIndicator" TEXT[],
ADD COLUMN     "colors" TEXT[],
ADD COLUMN     "edhrecRank" INTEGER,
ADD COLUMN     "handModifier" TEXT,
ADD COLUMN     "keywords" TEXT[],
ADD COLUMN     "layout" TEXT NOT NULL,
ADD COLUMN     "legalities" JSONB[],
ADD COLUMN     "lifeModifier" TEXT,
ADD COLUMN     "loyalty" TEXT,
ADD COLUMN     "manaCost" TEXT,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "oracleText" TEXT,
ADD COLUMN     "oversized" BOOLEAN NOT NULL,
ADD COLUMN     "power" TEXT,
ADD COLUMN     "producedMana" TEXT[],
ADD COLUMN     "reserved" BOOLEAN NOT NULL,
ADD COLUMN     "toughness" TEXT,
ADD COLUMN     "typeLine" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "Card_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Set" DROP CONSTRAINT "Set_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "Set_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "Thing";

-- CreateTable
CREATE TABLE "RelatedCard" (
    "id" UUID NOT NULL,
    "component" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "typeLine" TEXT NOT NULL,
    "uri" TEXT NOT NULL,

    CONSTRAINT "RelatedCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CardFaces" (
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

    CONSTRAINT "CardFaces_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CardToRelatedCard" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CardToRelatedCard_AB_unique" ON "_CardToRelatedCard"("A", "B");

-- CreateIndex
CREATE INDEX "_CardToRelatedCard_B_index" ON "_CardToRelatedCard"("B");

-- AddForeignKey
ALTER TABLE "CardFaces" ADD CONSTRAINT "CardFaces_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CardToRelatedCard" ADD FOREIGN KEY ("A") REFERENCES "Card"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CardToRelatedCard" ADD FOREIGN KEY ("B") REFERENCES "RelatedCard"("id") ON DELETE CASCADE ON UPDATE CASCADE;
