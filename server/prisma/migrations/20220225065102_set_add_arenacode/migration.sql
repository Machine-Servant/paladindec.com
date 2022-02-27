/*
  Warnings:

  - A unique constraint covering the columns `[arenaCode]` on the table `Set` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Set" ADD COLUMN     "arenaCode" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Set_arenaCode_key" ON "Set"("arenaCode");
