/*
  Warnings:

  - You are about to drop the `Card` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CardFace` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RelatedCard` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Set` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Card" DROP CONSTRAINT "Card_setId_fkey";

-- DropForeignKey
ALTER TABLE "CardFace" DROP CONSTRAINT "CardFace_cardId_fkey";

-- DropForeignKey
ALTER TABLE "RelatedCard" DROP CONSTRAINT "RelatedCard_cardId_fkey";

-- DropForeignKey
ALTER TABLE "RelatedCard" DROP CONSTRAINT "RelatedCard_referenceId_fkey";

-- DropTable
DROP TABLE "Card";

-- DropTable
DROP TABLE "CardFace";

-- DropTable
DROP TABLE "RelatedCard";

-- DropTable
DROP TABLE "Set";

-- CreateTable
CREATE TABLE "ScryfallSet" (
    "id" UUID NOT NULL,
    "code" TEXT NOT NULL,
    "mtgoCode" TEXT,
    "arenaCode" TEXT,
    "tcgPlayerId" INTEGER,
    "name" TEXT NOT NULL,
    "setType" TEXT NOT NULL,
    "releasedAt" TIMESTAMP(3),
    "blockCode" TEXT,
    "block" TEXT,
    "parentSetCode" TEXT,
    "cardCount" INTEGER NOT NULL,
    "printedSize" INTEGER,
    "isDigital" BOOLEAN NOT NULL,
    "isFoilOnly" BOOLEAN NOT NULL,
    "isNonFoilOnly" BOOLEAN NOT NULL,
    "scryfallUri" TEXT NOT NULL,
    "uri" TEXT NOT NULL,
    "iconSvgUri" TEXT NOT NULL,
    "searchUri" TEXT NOT NULL,

    CONSTRAINT "ScryfallSet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ScryfallRelatedCard" (
    "id" UUID NOT NULL,
    "referenceId" UUID NOT NULL,
    "cardId" UUID NOT NULL,
    "component" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "typeLine" TEXT NOT NULL,
    "uri" TEXT NOT NULL,

    CONSTRAINT "ScryfallRelatedCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ScryfallCardFace" (
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

    CONSTRAINT "ScryfallCardFace_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ScryfallCard" (
    "id" UUID NOT NULL,
    "arenaId" INTEGER,
    "lang" TEXT NOT NULL,
    "mtgoId" INTEGER,
    "mtgoFoilId" INTEGER,
    "multiverseIds" INTEGER[],
    "tcgplayerId" INTEGER,
    "tcgplayerEtchedId" INTEGER,
    "cardmarketId" INTEGER,
    "oracleId" TEXT,
    "printsSearchUri" TEXT NOT NULL,
    "rulingUri" TEXT,
    "scryfallUri" TEXT NOT NULL,
    "uri" TEXT NOT NULL,
    "allParts" JSONB[],
    "cardFacesRaw" JSONB[],
    "cmc" DECIMAL(65,30),
    "colorIdentity" TEXT[],
    "colorIndicator" TEXT[],
    "colors" TEXT[],
    "edhrecRank" INTEGER,
    "handModifier" TEXT,
    "keywords" TEXT[],
    "layout" TEXT NOT NULL,
    "legalities" JSONB NOT NULL,
    "lifeModifier" TEXT,
    "loyalty" TEXT,
    "manaCost" TEXT,
    "name" TEXT NOT NULL,
    "oracleText" TEXT,
    "oversized" BOOLEAN NOT NULL,
    "power" TEXT,
    "producedMana" TEXT[],
    "reserved" BOOLEAN NOT NULL,
    "toughness" TEXT,
    "typeLine" TEXT,
    "artist" TEXT,
    "booster" BOOLEAN NOT NULL,
    "borderColor" TEXT NOT NULL,
    "cardBackId" TEXT,
    "collectorNumber" TEXT NOT NULL,
    "contentWarning" BOOLEAN,
    "digital" BOOLEAN NOT NULL,
    "finishes" TEXT[],
    "flavorName" TEXT,
    "frameEffects" TEXT[],
    "frame" TEXT NOT NULL,
    "fullArt" BOOLEAN NOT NULL,
    "games" TEXT[],
    "highresImage" BOOLEAN NOT NULL,
    "illustrationId" TEXT,
    "imageStatus" TEXT NOT NULL,
    "imageUris" JSONB,
    "prices" JSONB NOT NULL,
    "printedName" TEXT,
    "printedText" TEXT,
    "printedTypeLine" TEXT,
    "promo" BOOLEAN NOT NULL,
    "promoTypes" TEXT[],
    "purchaseUris" JSONB,
    "rarity" TEXT NOT NULL,
    "relatedUris" JSONB NOT NULL,
    "releasedAt" TIMESTAMP(3) NOT NULL,
    "reprint" BOOLEAN NOT NULL,
    "scryfallSetUri" TEXT NOT NULL,
    "setCode" TEXT NOT NULL,
    "setName" TEXT NOT NULL,
    "setSearchUri" TEXT NOT NULL,
    "setType" TEXT NOT NULL,
    "setUri" TEXT NOT NULL,
    "storySpotlight" BOOLEAN NOT NULL,
    "textless" BOOLEAN NOT NULL,
    "variation" BOOLEAN NOT NULL,
    "varationOf" TEXT,
    "securityStamp" TEXT,
    "watermark" TEXT,
    "setId" UUID NOT NULL,

    CONSTRAINT "ScryfallCard_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ScryfallSet_code_key" ON "ScryfallSet"("code");

-- CreateIndex
CREATE UNIQUE INDEX "ScryfallSet_mtgoCode_key" ON "ScryfallSet"("mtgoCode");

-- CreateIndex
CREATE UNIQUE INDEX "ScryfallSet_arenaCode_key" ON "ScryfallSet"("arenaCode");

-- CreateIndex
CREATE INDEX "ScryfallSet_code_idx" ON "ScryfallSet"("code");

-- CreateIndex
CREATE INDEX "ScryfallCard_name_idx" ON "ScryfallCard"("name");

-- AddForeignKey
ALTER TABLE "ScryfallRelatedCard" ADD CONSTRAINT "ScryfallRelatedCard_referenceId_fkey" FOREIGN KEY ("referenceId") REFERENCES "ScryfallCard"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScryfallRelatedCard" ADD CONSTRAINT "ScryfallRelatedCard_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "ScryfallCard"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScryfallCardFace" ADD CONSTRAINT "ScryfallCardFace_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "ScryfallCard"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScryfallCard" ADD CONSTRAINT "ScryfallCard_setId_fkey" FOREIGN KEY ("setId") REFERENCES "ScryfallSet"("id") ON DELETE CASCADE ON UPDATE CASCADE;
