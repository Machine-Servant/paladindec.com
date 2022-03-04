-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "canBeFoil" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "collectorNumber" TEXT,
ADD COLUMN     "isPaper" BOOLEAN NOT NULL DEFAULT false;
