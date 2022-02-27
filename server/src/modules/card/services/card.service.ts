import { Injectable, Logger } from '@nestjs/common';
import { Card } from '@prisma/client';
import { omit } from 'lodash';
import { CardOrderByWithAggregationInput } from '../../../@generated/prisma-nestjs-graphql/card/card-order-by-with-aggregation.input';
import { CardWhereInput } from '../../../@generated/prisma-nestjs-graphql/card/card-where.input';
import { PrismaService } from '../../prisma/services/prisma.service';

@Injectable()
export class CardService {
  constructor(private readonly prismaService: PrismaService) {}

  private readonly logger = new Logger(CardService.name);

  async upsert(data: Card): Promise<Card> {
    try {
      const toUpsert = {
        set: { connect: { id: data.setId } },
        ...omit(data, 'setId'),
      };
      return this.prismaService.card.upsert({
        where: { id: data.id },
        update: toUpsert,
        create: toUpsert,
      });
    } catch (err) {
      this.logger.error(err);
      throw err;
    }
  }

  async findMany(
    args?: CardWhereInput,
    takeArgs?: number,
    orderBy?: CardOrderByWithAggregationInput,
  ): Promise<Card[]> {
    return this.prismaService.card.findMany({
      where: args,
      take: takeArgs,
      orderBy: orderBy,
    });
  }

  async count(where?: CardWhereInput): Promise<number> {
    return this.prismaService.card.count({ where });
  }
}
