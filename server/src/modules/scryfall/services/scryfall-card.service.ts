import { Injectable, Logger } from '@nestjs/common';
import { ScryfallCard } from '@prisma/client';
import { omit } from 'lodash';
import { FindManyScryfallCardArgs } from '../../../@generated/prisma-nestjs-graphql/scryfall-card/find-many-scryfall-card.args';
import { ScryfallCardWhereInput } from '../../../@generated/prisma-nestjs-graphql/scryfall-card/scryfall-card-where.input';
import { PrismaService } from '../../prisma/services/prisma.service';

@Injectable()
export class ScryfallCardService {
  constructor(private readonly prismaService: PrismaService) {}

  private readonly logger = new Logger(ScryfallCardService.name);

  async upsert(data: ScryfallCard): Promise<ScryfallCard> {
    try {
      const toUpsert = {
        set: { connect: { id: data.setId } },
        ...omit(data, 'setId'),
      };
      return this.prismaService.scryfallCard.upsert({
        where: { id: data.id },
        update: toUpsert,
        create: toUpsert,
      });
    } catch (err) {
      this.logger.error(err);
      throw err;
    }
  }

  async findMany(args?: FindManyScryfallCardArgs): Promise<ScryfallCard[]> {
    return this.prismaService.scryfallCard.findMany(args);
  }

  async findOne(cardId: string): Promise<ScryfallCard> {
    return this.prismaService.scryfallCard.findUnique({
      where: { id: cardId },
    });
  }

  async count(where?: ScryfallCardWhereInput): Promise<number> {
    return this.prismaService.scryfallCard.count({ where });
  }
}
