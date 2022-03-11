-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "canBeEtched" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "canBeNonFoil" BOOLEAN NOT NULL DEFAULT false;
