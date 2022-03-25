import { Logger } from '@nestjs/common';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { User } from '@prisma/client';
import { CardsInCollection } from '../../../@generated/prisma-nestjs-graphql/cards-in-collection/cards-in-collection.model';
import { FindManyTagArgs } from '../../../@generated/prisma-nestjs-graphql/tag/find-many-tag.args';
import { TagCreateWithoutUserInput } from '../../../@generated/prisma-nestjs-graphql/tag/tag-create-without-user.input';
import { Tag } from '../../../@generated/prisma-nestjs-graphql/tag/tag.model';
import { CardsInCollectionService } from '../../collection/services/cards-in-collection.service';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { TagService } from '../services/tag.service';

@Resolver(() => Tag)
export class TagResolver {
  constructor(
    private readonly tagService: TagService,
    private readonly cardsInCollectionService: CardsInCollectionService,
  ) {}

  private readonly logger = new Logger(TagResolver.name);

  @Query(() => [Tag])
  async allTags(
    @CurrentUser() user: User,
    @Args() args?: FindManyTagArgs,
  ): Promise<Tag[]> {
    return this.tagService.findMany(user.id, args);
  }

  @Mutation(() => Tag)
  async createTag(
    @CurrentUser() user: User,
    @Args('input') args: TagCreateWithoutUserInput,
  ): Promise<Tag> {
    return this.tagService.createOne(user.id, args);
  }

  @ResolveField('cards', () => [CardsInCollection])
  async getCards(
    @Parent() tag: Tag,
    @CurrentUser() user: User,
  ): Promise<CardsInCollection[]> {
    return this.cardsInCollectionService.findMany(user.id, {
      where: {
        tags: {
          some: {
            id: {
              equals: tag.id,
            },
          },
        },
      },
    });
  }
}
