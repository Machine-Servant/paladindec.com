/*
  Warnings:

  - You are about to alter the column `cmc` on the `ScryfallCard` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Real`.
  - You are about to alter the column `cmc` on the `ScryfallCardFace` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Real`.

*/
-- AlterTable
ALTER TABLE "ScryfallCard" ALTER COLUMN "cmc" SET DATA TYPE REAL;

-- AlterTable
ALTER TABLE "ScryfallCardFace" ALTER COLUMN "cmc" SET DATA TYPE REAL;
