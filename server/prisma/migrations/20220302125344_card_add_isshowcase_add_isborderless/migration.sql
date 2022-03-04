-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "isBorderless" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isShowcase" BOOLEAN NOT NULL DEFAULT false;
