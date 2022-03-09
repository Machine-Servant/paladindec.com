import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Prisma, ScryfallCardName } from '@prisma/client';
import { Queue } from 'bull';
import { FindManyScryfallCardNameArgs } from '../../../@generated/prisma-nestjs-graphql/scryfall-card-name/find-many-scryfall-card-name.args';
import { ScryfallCardNameCreateManyInput } from '../../../@generated/prisma-nestjs-graphql/scryfall-card-name/scryfall-card-name-create-many.input';
import { PrismaService } from '../../prisma/services/prisma.service';

@Injectable()
export class ScryfallCardNameService {
  constructor(
    private readonly prismaService: PrismaService,
    @InjectQueue('card-name') private readonly cardNameQueue: Queue,
  ) {}

  async findManyByName(
    args?: FindManyScryfallCardNameArgs,
  ): Promise<ScryfallCardName[]> {
    return this.prismaService.scryfallCardName.findMany({
      orderBy: [{ name: 'asc' }],
      ...args,
      distinct: 'name',
    });
  }

  async drop(): Promise<Prisma.BatchPayload> {
    return this.prismaService.scryfallCardName.deleteMany();
  }

  async createMany(
    data: Prisma.Enumerable<ScryfallCardNameCreateManyInput>,
  ): Promise<Prisma.BatchPayload> {
    return this.prismaService.scryfallCardName.createMany({ data });
  }

  async process(): Promise<boolean> {
    await this.cardNameQueue.add('process');
    return true;
  }
}
