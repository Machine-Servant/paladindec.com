import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { ScryfallPrice } from 'prisma/prisma-client';
import { FindManyScryfallPriceArgs } from '../../../@generated/prisma-nestjs-graphql/scryfall-price/find-many-scryfall-price.args';
import { FindUniqueScryfallPriceArgs } from '../../../@generated/prisma-nestjs-graphql/scryfall-price/find-unique-scryfall-price.args';
import { ScryfallPriceGroupByArgs } from '../../../@generated/prisma-nestjs-graphql/scryfall-price/scryfall-price-group-by.args';
import { ScryfallPriceUncheckedCreateInput } from '../../../@generated/prisma-nestjs-graphql/scryfall-price/scryfall-price-unchecked-create.input';
import { PrismaService } from '../../prisma/services/prisma.service';

@Injectable()
export class ScryfallPriceService {
  constructor(
    private readonly prismaService: PrismaService,
    @InjectQueue('price-data') private readonly priceDataQueue: Queue,
  ) {}

  async findMany(query: FindManyScryfallPriceArgs): Promise<ScryfallPrice[]> {
    return this.prismaService.scryfallPrice.findMany(query);
  }

  async findUnique(query: FindUniqueScryfallPriceArgs): Promise<ScryfallPrice> {
    return this.prismaService.scryfallPrice.findUnique(query);
  }

  async findMostRecentDate(): Promise<Date> {
    return (
      await this.prismaService.scryfallPrice.findFirst({
        orderBy: { date: 'desc' },
        distinct: 'date',
      })
    ).date;
  }

  async findMostRecentPriceForCard(
    scryfallCardId: string,
  ): Promise<ScryfallPrice> {
    return this.prismaService.scryfallPrice.findFirst({
      orderBy: { date: 'desc' },
      where: { cardId: scryfallCardId },
    });
  }

  async groupBy(query: ScryfallPriceGroupByArgs): Promise<any> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return this.prismaService.scryfallPrice.groupBy(query);
  }

  async create(
    data: ScryfallPriceUncheckedCreateInput,
  ): Promise<ScryfallPrice> {
    return this.prismaService.scryfallPrice.create({ data });
  }

  async process(): Promise<boolean> {
    await this.priceDataQueue.add('process', {});
    return true;
  }
}
