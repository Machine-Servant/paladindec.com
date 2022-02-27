/*
  Warnings:

  - Added the required column `booster` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `borderColor` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cardBackId` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `collectorNumber` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `digital` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `frame` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullArt` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `highresImage` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageStatus` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prices` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `promo` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rarity` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `relatedUris` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `releasedAt` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reprint` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `scryfallSetUri` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `setCode` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `setId` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `setName` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `setSearchUri` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `setType` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `setUri` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `storySpotlight` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `textless` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `variation` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "artist" TEXT,
ADD COLUMN     "booster" BOOLEAN NOT NULL,
ADD COLUMN     "borderColor" TEXT NOT NULL,
ADD COLUMN     "cardBackId" TEXT NOT NULL,
ADD COLUMN     "collectorNumber" TEXT NOT NULL,
ADD COLUMN     "contentWarning" BOOLEAN,
ADD COLUMN     "digital" BOOLEAN NOT NULL,
ADD COLUMN     "finishes" TEXT[],
ADD COLUMN     "flavorName" TEXT,
ADD COLUMN     "frame" TEXT NOT NULL,
ADD COLUMN     "frameEffects" TEXT[],
ADD COLUMN     "fullArt" BOOLEAN NOT NULL,
ADD COLUMN     "games" TEXT[],
ADD COLUMN     "highresImage" BOOLEAN NOT NULL,
ADD COLUMN     "illustrationId" TEXT,
ADD COLUMN     "imageStatus" TEXT NOT NULL,
ADD COLUMN     "imageUris" JSONB,
ADD COLUMN     "prices" JSONB NOT NULL,
ADD COLUMN     "printedName" TEXT,
ADD COLUMN     "printedText" TEXT,
ADD COLUMN     "printedTypeLine" TEXT,
ADD COLUMN     "promo" BOOLEAN NOT NULL,
ADD COLUMN     "promoTypes" TEXT[],
ADD COLUMN     "purchaseUris" JSONB,
ADD COLUMN     "rarity" TEXT NOT NULL,
ADD COLUMN     "relatedUris" JSONB NOT NULL,
ADD COLUMN     "releasedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "reprint" BOOLEAN NOT NULL,
ADD COLUMN     "scryfallSetUri" TEXT NOT NULL,
ADD COLUMN     "securityStamp" TEXT,
ADD COLUMN     "setCode" TEXT NOT NULL,
ADD COLUMN     "setId" UUID NOT NULL,
ADD COLUMN     "setName" TEXT NOT NULL,
ADD COLUMN     "setSearchUri" TEXT NOT NULL,
ADD COLUMN     "setType" TEXT NOT NULL,
ADD COLUMN     "setUri" TEXT NOT NULL,
ADD COLUMN     "storySpotlight" BOOLEAN NOT NULL,
ADD COLUMN     "textless" BOOLEAN NOT NULL,
ADD COLUMN     "varationOf" TEXT,
ADD COLUMN     "variation" BOOLEAN NOT NULL,
ADD COLUMN     "watermark" TEXT;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_setId_fkey" FOREIGN KEY ("setId") REFERENCES "Set"("id") ON DELETE CASCADE ON UPDATE CASCADE;
