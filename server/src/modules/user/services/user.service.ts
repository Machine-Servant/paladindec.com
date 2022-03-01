import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserWhereUniqueInput } from '../../../@generated/prisma-nestjs-graphql/user/user-where-unique.input';
import { PrismaService } from '../../prisma/services/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async findUnique(where: UserWhereUniqueInput): Promise<User> {
    return this.prismaService.user.findUnique({ where });
  }
}
