import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserCreateWithoutCollectionsInput } from '../../../@generated/prisma-nestjs-graphql/user/user-create-without-collections.input';
import { User } from '../../../@generated/prisma-nestjs-graphql/user/user.model';
import { BypassCurrentUser } from '../../common/decorators/bypass-current-user.decorator';
import { IsPublic } from '../../common/decorators/is-public.decorator';
import { UserService } from '../services/user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  @BypassCurrentUser()
  @IsPublic()
  async getOrCreateUser(
    @Args('input') input: UserCreateWithoutCollectionsInput,
  ): Promise<User> {
    return this.userService.getOrCreate(input);
  }
}
