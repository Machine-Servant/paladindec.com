import { Injectable, Logger } from '@nestjs/common';
import { ScryfallSet } from 'prisma/prisma-client';
import { FindManyScryfallSetArgs } from '../../../@generated/prisma-nestjs-graphql/scryfall-set/find-many-scryfall-set.args';
import { PrismaService } from '../../prisma/services/prisma.service';

@Injectable()
export class ScryfallSetService {
  constructor(private readonly prismaService: PrismaService) {}

  private readonly logger = new Logger(ScryfallSetService.name);

  async bulkUpsert(
    data: Omit<ScryfallSet, 'createdAt' | 'updatedAt'>[],
  ): Promise<ScryfallSet[]> {
    this.logger.debug(`Upserting ${data.length} entries`);
    const results: ScryfallSet[] = [];
    for (const input of data) {
      try {
        const result = await this.prismaService.scryfallSet.upsert({
          where: { id: input.id },
          create: input,
          update: input,
        });
        results.push(Object.assign({}, new Set(), result));
      } catch (err) {
        console.log(err);
        throw err;
      }
    }
    this.logger.debug(`Done upserting`);

    return results;
  }

  async findMany(query?: FindManyScryfallSetArgs): Promise<ScryfallSet[]> {
    return this.prismaService.scryfallSet.findMany(query);
  }

  async findOne(id: string): Promise<ScryfallSet> {
    return this.prismaService.scryfallSet.findUnique({ where: { id } });
  }
}
