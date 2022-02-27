-- CreateTable
CREATE TABLE "Card" (
    "id" TEXT NOT NULL,
    "arenaId" TEXT,
    "lang" TEXT NOT NULL,
    "mtgoId" INTEGER,
    "mtgoFoilId" INTEGER,
    "multiverseIds" INTEGER[],
    "tcgplayerId" INTEGER,
    "tcgplayerEtchedId" INTEGER,
    "cardmarketId" INTEGER,
    "oracleId" TEXT NOT NULL,
    "printsSearchUri" TEXT NOT NULL,
    "rulingUri" TEXT NOT NULL,
    "scryfallUri" TEXT NOT NULL,
    "uri" TEXT NOT NULL,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Card_arenaId_key" ON "Card"("arenaId");

-- CreateIndex
CREATE UNIQUE INDEX "Card_mtgoId_key" ON "Card"("mtgoId");

-- CreateIndex
CREATE UNIQUE INDEX "Card_mtgoFoilId_key" ON "Card"("mtgoFoilId");

-- CreateIndex
CREATE UNIQUE INDEX "Card_cardmarketId_key" ON "Card"("cardmarketId");

-- CreateIndex
CREATE UNIQUE INDEX "Card_oracleId_key" ON "Card"("oracleId");
