-- CreateTable
CREATE TABLE "ScryfallDailyProcessLog" (
    "id" UUID NOT NULL,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ScryfallDailyProcessLog_pkey" PRIMARY KEY ("id")
);
