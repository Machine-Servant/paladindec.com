import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserCreateWithoutCollectionsInput } from '../../../@generated/prisma-nestjs-graphql/user/user-create-without-collections.input';
import { UserWhereUniqueInput } from '../../../@generated/prisma-nestjs-graphql/user/user-where-unique.input';
import { PrismaService } from '../../prisma/services/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async findUnique(where: UserWhereUniqueInput): Promise<User> {
    return this.prismaService.user.findUnique({ where });
  }

  async getOrCreate(input: UserCreateWithoutCollectionsInput): Promise<User> {
    const results = await this.prismaService.user.findUnique({
      where: { externalAuthId: input.externalAuthId },
    });
    if (!results) {
      return this.prismaService.user.create({ data: input });
    }
    return results;
  }
}
