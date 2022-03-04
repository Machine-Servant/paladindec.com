import { Injectable } from '@nestjs/common';
import { Collection } from '@prisma/client';
import { FindManyCollectionArgs } from '../../../@generated/prisma-nestjs-graphql/collection/find-many-collection.args';
import { PrismaService } from '../../prisma/services/prisma.service';

@Injectable()
export class CollectionService {
  constructor(private readonly prismaService: PrismaService) {}

  async findMany(args?: FindManyCollectionArgs): Promise<Collection[]> {
    return this.prismaService.collection.findMany(args);
  }
}
