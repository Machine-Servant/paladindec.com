import { Injectable, Logger } from '@nestjs/common';
import { Card } from '@prisma/client';
import { CardCreateInput } from '../../../@generated/prisma-nestjs-graphql/card/card-create.input';
import { FindManyCardArgs } from '../../../@generated/prisma-nestjs-graphql/card/find-many-card.args';
import { FindUniqueCardArgs } from '../../../@generated/prisma-nestjs-graphql/card/find-unique-card.args';
import { PrismaService } from '../../prisma/services/prisma.service';

@Injectable()
export class CardService {
  constructor(private readonly prismaService: PrismaService) {}

  private readonly logger = new Logger(CardService.name);

  async findMany(
    args?: FindManyCardArgs,
    options?: { includeScryfallCard?: boolean; includeCurrentPrice?: boolean },
  ): Promise<Card[]> {
    const include: { currentPrice?: boolean; scryfallCard?: boolean } = {};
    if (options) {
      if (options.includeCurrentPrice) {
        include.currentPrice = true;
      }
      if (options.includeScryfallCard) {
        include.scryfallCard = true;
      }
    }
    return this.prismaService.card.findMany({
      ...args,
      include,
    });
  }

  async findUnique(args: FindUniqueCardArgs, include: any): Promise<Card> {
    return this.prismaService.card.findUnique({ ...args, include });
  }

  async upsert(data: CardCreateInput): Promise<Card> {
    try {
      const result = await this.prismaService.card.upsert({
        where: { scryfallCardId: data.scryfallCard.connect.id },
        create: data,
        update: data,
      });
      return result;
    } catch (err) {
      this.logger.error(err);
      throw err;
    }
  }
}
