import { Injectable, Logger } from '@nestjs/common';
import { RelatedCard } from '@prisma/client';
import { RelatedCardWhereInput } from '../../../@generated/prisma-nestjs-graphql/related-card/related-card-where.input';
import { PrismaService } from '../../prisma/services/prisma.service';

@Injectable()
export class RelatedCardService {
  constructor(private readonly prismaService: PrismaService) {}

  private readonly logger = new Logger(RelatedCardService.name);

  async drop(): Promise<number> {
    return (await this.prismaService.relatedCard.deleteMany({})).count;
  }

  async findMany(args: RelatedCardWhereInput): Promise<RelatedCard[]> {
    return this.prismaService.relatedCard.findMany({ where: args });
  }

  async create(data: RelatedCard): Promise<RelatedCard> {
    try {
      this.logger.debug(`Creating #${data.name}`);
      const results = await this.prismaService.relatedCard.create({ data });
      this.logger.debug(`Done creating #${results.id}`);
      return results;
    } catch (err) {
      this.logger.error(err);
      throw err;
    }
  }

  async count(where?: RelatedCardWhereInput): Promise<number> {
    return this.prismaService.relatedCard.count({ where });
  }
}
