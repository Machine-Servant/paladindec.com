/*
  Warnings:

  - The `arenaId` column on the `Card` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[arenaId]` on the table `Card` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Card" DROP COLUMN "arenaId",
ADD COLUMN     "arenaId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Card_arenaId_key" ON "Card"("arenaId");
