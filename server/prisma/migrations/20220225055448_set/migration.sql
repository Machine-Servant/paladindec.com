-- CreateTable
CREATE TABLE "Set" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "mtgoCode" TEXT,
    "tcgPlayerId" TEXT,
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

    CONSTRAINT "Set_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Set_code_key" ON "Set"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Set_mtgoCode_key" ON "Set"("mtgoCode");

-- CreateIndex
CREATE UNIQUE INDEX "Set_tcgPlayerId_key" ON "Set"("tcgPlayerId");

-- CreateIndex
CREATE INDEX "Set_code_idx" ON "Set"("code");
