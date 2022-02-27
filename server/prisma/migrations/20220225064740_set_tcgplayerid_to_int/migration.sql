/*
  Warnings:

  - The `tcgPlayerId` column on the `Set` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[tcgPlayerId]` on the table `Set` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Set" DROP COLUMN "tcgPlayerId",
ADD COLUMN     "tcgPlayerId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Set_tcgPlayerId_key" ON "Set"("tcgPlayerId");
