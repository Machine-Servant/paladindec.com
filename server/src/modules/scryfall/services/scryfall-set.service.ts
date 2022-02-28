import { Injectable, Logger } from '@nestjs/common';
import { ScryfallSet } from 'prisma/prisma-client';
import { ScryfallSetOrderByWithAggregationInput } from '../../../@generated/prisma-nestjs-graphql/scryfall-set/scryfall-set-order-by-with-aggregation.input';
import { ScryfallSetWhereInput } from '../../../@generated/prisma-nestjs-graphql/scryfall-set/scryfall-set-where.input';
import { PrismaService } from '../../prisma/services/prisma.service';

@Injectable()
export class ScryfallSetService {
  constructor(private readonly prismaService: PrismaService) {}

  private readonly logger = new Logger(ScryfallSetService.name);

  async bulkUpsert(data: ScryfallSet[]): Promise<ScryfallSet[]> {
    this.logger.debug(`Upserting ${data.length} entries`);
    const results: ScryfallSet[] = [];
    for (const input of data) {
      this.logger.debug(`Processing ${input.id}`);
      try {
        const result = await this.prismaService.scryfallSet.upsert({
          where: { id: input.id },
          create: input,
          update: input,
        });
        this.logger.debug(`Finished processing ${input.id}`);
        results.push(Object.assign({}, new Set(), result));
      } catch (err) {
        console.log(err);
        throw err;
      }
    }
    this.logger.debug(`Done upserting`);

    return results;
  }

  async findMany(
    where?: ScryfallSetWhereInput,
    orderBy?: ScryfallSetOrderByWithAggregationInput,
  ): Promise<ScryfallSet[]> {
    return this.prismaService.scryfallSet.findMany({ where, orderBy });
  }

  async findOne(id: string): Promise<ScryfallSet> {
    return this.prismaService.scryfallSet.findUnique({ where: { id } });
  }
}
