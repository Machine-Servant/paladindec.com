import { Injectable, Logger } from '@nestjs/common';
import { Tag } from '@prisma/client';
import { FindManyTagArgs } from '../../../@generated/prisma-nestjs-graphql/tag/find-many-tag.args';
import { TagCreateWithoutUserInput } from '../../../@generated/prisma-nestjs-graphql/tag/tag-create-without-user.input';
import { PrismaService } from '../../prisma/services/prisma.service';

@Injectable()
export class TagService {
  constructor(private readonly prismaService: PrismaService) {}

  private readonly logger = new Logger(TagService.name);

  async findMany(userId: string, args?: FindManyTagArgs): Promise<Tag[]> {
    return this.prismaService.tag.findMany({
      ...args,
      where: {
        ...args.where,
        user: {
          id: { equals: userId },
        },
      },
    });
  }

  async createOne(
    userId: string,
    args: TagCreateWithoutUserInput,
  ): Promise<Tag> {
    return this.prismaService.tag.create({
      data: {
        ...args,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }
}
