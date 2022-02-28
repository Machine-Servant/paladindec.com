-- CreateTable
CREATE TABLE "ScryfallPrice" (
    "id" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "eur" REAL,
    "tix" REAL,
    "usd" REAL,
    "eurFoil" REAL,
    "usdFoil" REAL,
    "usdEtched" REAL,
    "cardId" UUID NOT NULL,

    CONSTRAINT "ScryfallPrice_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ScryfallPrice" ADD CONSTRAINT "ScryfallPrice_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "ScryfallCard"("id") ON DELETE CASCADE ON UPDATE CASCADE;
