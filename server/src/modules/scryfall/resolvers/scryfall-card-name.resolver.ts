import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FindManyScryfallCardNameArgs } from '../../../@generated/prisma-nestjs-graphql/scryfall-card-name/find-many-scryfall-card-name.args';
import { ScryfallCardName } from '../../../@generated/prisma-nestjs-graphql/scryfall-card-name/scryfall-card-name.model';
import { ScryfallCardNameService } from '../services/scryfall-card-name.service';

@Resolver(() => ScryfallCardName)
export class ScryfallCardNameResolver {
  constructor(
    private readonly scryfallCardNameService: ScryfallCardNameService,
  ) {}

  @Query(() => [ScryfallCardName])
  async allScryfallCardNames(
    @Args() args?: FindManyScryfallCardNameArgs,
  ): Promise<ScryfallCardName[]> {
    return this.scryfallCardNameService.findManyByName(args);
  }

  @Mutation(() => Boolean)
  async processCardNames(): Promise<boolean> {
    await this.scryfallCardNameService.process();
    return true;
  }
}
