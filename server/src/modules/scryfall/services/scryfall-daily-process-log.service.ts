import { Injectable } from '@nestjs/common';
import { ScryfallDailyProcessLog } from '@prisma/client';
import { CreateOneScryfallDailyProcessLogArgs } from '../../../@generated/prisma-nestjs-graphql/scryfall-daily-process-log/create-one-scryfall-daily-process-log.args';
import { FindUniqueScryfallDailyProcessLogArgs } from '../../../@generated/prisma-nestjs-graphql/scryfall-daily-process-log/find-unique-scryfall-daily-process-log.args';
import { PrismaService } from '../../prisma/services/prisma.service';

@Injectable()
export class ScryfallDailyProcessLogService {
  constructor(private readonly prismaService: PrismaService) {}

  async findUnique(
    args: FindUniqueScryfallDailyProcessLogArgs,
  ): Promise<ScryfallDailyProcessLog> {
    return this.prismaService.scryfallDailyProcessLog.findUnique({
      rejectOnNotFound: true,
      ...args,
    });
  }

  async findCurrentlyRunningJobs(
    date: Date,
  ): Promise<ScryfallDailyProcessLog[]> {
    const today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const endOfDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() + 1,
      0,
      0,
      -1,
    );
    return this.prismaService.scryfallDailyProcessLog.findMany({
      where: {
        isCompleted: { equals: false },
        createdAt: { gte: today, lte: endOfDay },
      },
    });
  }

  async create(
    args: CreateOneScryfallDailyProcessLogArgs,
  ): Promise<ScryfallDailyProcessLog> {
    return this.prismaService.scryfallDailyProcessLog.create(args);
  }

  async finish(
    scryfallDailyProcessLog: Pick<ScryfallDailyProcessLog, 'id'>,
  ): Promise<ScryfallDailyProcessLog> {
    return this.prismaService.scryfallDailyProcessLog.update({
      where: { id: scryfallDailyProcessLog.id },
      data: { isCompleted: true },
    });
  }
}
