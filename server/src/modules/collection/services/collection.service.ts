import { Injectable } from '@nestjs/common';
import { Collection } from '@prisma/client';
import { CollectionCreateWithoutUserInput } from '../../../@generated/prisma-nestjs-graphql/collection/collection-create-without-user.input';
import { CollectionCreateInput } from '../../../@generated/prisma-nestjs-graphql/collection/collection-create.input';
import { CreateOneCollectionArgs } from '../../../@generated/prisma-nestjs-graphql/collection/create-one-collection.args';
import { FindFirstCollectionArgs } from '../../../@generated/prisma-nestjs-graphql/collection/find-first-collection.args';
import { FindManyCollectionArgs } from '../../../@generated/prisma-nestjs-graphql/collection/find-many-collection.args';
import { FindUniqueCollectionArgs } from '../../../@generated/prisma-nestjs-graphql/collection/find-unique-collection.args';
import { PrismaService } from '../../prisma/services/prisma.service';

@Injectable()
export class CollectionService {
  constructor(private readonly prismaService: PrismaService) {}

  async findMany(
    userId: string,
    args?: FindManyCollectionArgs,
  ): Promise<Collection[]> {
    const queryArgs: FindManyCollectionArgs = {
      ...args,
      where: {
        ...args.where,
        userId: {
          equals: userId,
        },
      },
    };
    return this.prismaService.collection.findMany(queryArgs);
  }

  async findOne(
    args: FindFirstCollectionArgs,
    userId: string,
  ): Promise<Collection> {
    return this.prismaService.collection.findFirst({
      ...args,
      where: {
        ...args.where,
        userId: { equals: userId },
      },
    });
  }

  async create(
    input: CollectionCreateWithoutUserInput,
    userId: string,
  ): Promise<Collection> {
    return this.prismaService.collection.create({
      data: {
        ...input,
        user: { connect: { id: userId } },
      },
    });
  }
}
