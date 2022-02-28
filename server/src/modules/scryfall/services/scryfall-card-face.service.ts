import { Injectable, Logger } from '@nestjs/common';
import { ScryfallCardFace } from '@prisma/client';
import { ScryfallCardFaceCreateInput } from '../../../@generated/prisma-nestjs-graphql/scryfall-card-face/scryfall-card-face-create.input';
import { ScryfallCardFaceWhereInput } from '../../../@generated/prisma-nestjs-graphql/scryfall-card-face/scryfall-card-face-where.input';
import { PrismaService } from '../../prisma/services/prisma.service';

@Injectable()
export class ScryfallCardFaceService {
  constructor(private readonly prismaService: PrismaService) {}

  private readonly logger = new Logger(ScryfallCardFaceService.name);

  async drop(): Promise<number> {
    return (await this.prismaService.scryfallCardFace.deleteMany({})).count;
  }

  async findMany(
    where: ScryfallCardFaceWhereInput,
  ): Promise<ScryfallCardFace[]> {
    return this.prismaService.scryfallCardFace.findMany({ where });
  }

  async create(
    data: ScryfallCardFaceCreateInput, //ScryfallCardFaceUncheckedCreateInput,
  ): Promise<ScryfallCardFace> {
    try {
      this.logger.debug(`Creating #${data.name}`);
      const results = await this.prismaService.scryfallCardFace.create({
        data,
      });
      this.logger.debug(`Done creating #${results.id}`);
      return results;
    } catch (err) {
      this.logger.error(err);
      throw err;
    }
  }

  async count(where?: ScryfallCardFaceWhereInput): Promise<number> {
    return this.prismaService.scryfallCardFace.count({ where });
  }
}
