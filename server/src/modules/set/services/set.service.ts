import { Injectable, Logger } from '@nestjs/common';
import { SetOrderByWithAggregationInput } from '../../../@generated/prisma-nestjs-graphql/set/set-order-by-with-aggregation.input';
import { SetWhereInput } from '../../../@generated/prisma-nestjs-graphql/set/set-where.input';
import { Set } from '../../../@generated/prisma-nestjs-graphql/set/set.model';
import { PrismaService } from '../../prisma/services/prisma.service';

@Injectable()
export class SetService {
  constructor(private readonly prismaService: PrismaService) {}

  private readonly logger = new Logger(SetService.name);

  async bulkUpsert(data: Set[]): Promise<Set[]> {
    this.logger.debug(`Upserting ${data.length} entries`);
    const results: Set[] = [];
    for (const input of data) {
      this.logger.debug(`Processing ${input.id}`);
      try {
        const result = await this.prismaService.set.upsert({
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
    where?: SetWhereInput,
    orderBy?: SetOrderByWithAggregationInput,
  ): Promise<Set[]> {
    return this.prismaService.set.findMany({ where, orderBy });
  }

  async findOne(id: string): Promise<Set> {
    return this.prismaService.set.findUnique({ where: { id } });
  }
}
