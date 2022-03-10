-- CreateIndex
CREATE INDEX "ScryfallPrice_date_idx" ON "ScryfallPrice"("date");

-- CreateIndex
CREATE INDEX "ScryfallPrice_date_id_idx" ON "ScryfallPrice"("date", "id");
