import { Injectable } from '@nestjs/common';
import { Collection } from '@prisma/client';
import { CollectionCreateWithoutUserInput } from '../../../@generated/prisma-nestjs-graphql/collection/collection-create-without-user.input';
import { CollectionCreateInput } from '../../../@generated/prisma-nestjs-graphql/collection/collection-create.input';
import { CreateOneCollectionArgs } from '../../../@generated/prisma-nestjs-graphql/collection/create-one-collection.args';
import { FindManyCollectionArgs } from '../../../@generated/prisma-nestjs-graphql/collection/find-many-collection.args';
import { PrismaService } from '../../prisma/services/prisma.service';

@Injectable()
export class CollectionService {
  constructor(private readonly prismaService: PrismaService) {}

  async findMany(args?: FindManyCollectionArgs): Promise<Collection[]> {
    return this.prismaService.collection.findMany(args);
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
