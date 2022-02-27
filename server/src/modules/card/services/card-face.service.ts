import { Injectable, Logger } from '@nestjs/common';
import { CardFace } from '@prisma/client';
import { CardFaceWhereInput } from '../../../@generated/prisma-nestjs-graphql/card-face/card-face-where.input';
import { PrismaService } from '../../prisma/services/prisma.service';

@Injectable()
export class CardFaceService {
  constructor(private readonly prismaService: PrismaService) {}

  private readonly logger = new Logger(CardFaceService.name);

  async drop(): Promise<number> {
    return (await this.prismaService.cardFace.deleteMany({})).count;
  }

  async findMany(args: CardFaceWhereInput): Promise<CardFace[]> {
    return this.prismaService.cardFace.findMany({ where: args });
  }

  async create(data: CardFace): Promise<CardFace> {
    try {
      this.logger.debug(`Creating #${data.name}`);
      const results = await this.prismaService.cardFace.create({ data });
      this.logger.debug(`Done creating #${results.id}`);
      return results;
    } catch (err) {
      this.logger.error(err);
      throw err;
    }
  }

  async count(where?: CardFaceWhereInput): Promise<number> {
    return this.prismaService.cardFace.count({ where });
  }
}
