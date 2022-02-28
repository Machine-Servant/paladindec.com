import { Injectable, Logger } from '@nestjs/common';
import { ScryfallRelatedCard } from '@prisma/client';
import { ScryfallRelatedCardUncheckedCreateInput } from '../../../@generated/prisma-nestjs-graphql/scryfall-related-card/scryfall-related-card-unchecked-create.input';
import { ScryfallRelatedCardWhereInput } from '../../../@generated/prisma-nestjs-graphql/scryfall-related-card/scryfall-related-card-where.input';
import { PrismaService } from '../../prisma/services/prisma.service';

@Injectable()
export class ScryfallRelatedCardService {
  constructor(private readonly prismaService: PrismaService) {}

  private readonly logger = new Logger(ScryfallRelatedCardService.name);

  async drop(): Promise<number> {
    return (await this.prismaService.scryfallRelatedCard.deleteMany({})).count;
  }

  async findMany(
    args: ScryfallRelatedCardWhereInput,
  ): Promise<ScryfallRelatedCard[]> {
    return this.prismaService.scryfallRelatedCard.findMany({ where: args });
  }

  async create(
    data: ScryfallRelatedCardUncheckedCreateInput,
  ): Promise<ScryfallRelatedCard> {
    try {
      this.logger.debug(`Creating #${data.name}`);
      const results = await this.prismaService.scryfallRelatedCard.create({
        data,
      });
      this.logger.debug(`Done creating #${results.id}`);
      return results;
    } catch (err) {
      this.logger.error(err);
      throw err;
    }
  }

  async count(where?: ScryfallRelatedCardWhereInput): Promise<number> {
    return this.prismaService.scryfallRelatedCard.count({ where });
  }
}
