import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallRelatedCardWhereUniqueInput } from './scryfall-related-card-where-unique.input';
import { ScryfallRelatedCardCreateInput } from './scryfall-related-card-create.input';
import { ScryfallRelatedCardUpdateInput } from './scryfall-related-card-update.input';

@ArgsType()
export class UpsertOneScryfallRelatedCardArgs {
  @Field(() => ScryfallRelatedCardWhereUniqueInput, { nullable: false })
  where!: ScryfallRelatedCardWhereUniqueInput;

  @Field(() => ScryfallRelatedCardCreateInput, { nullable: false })
  create!: ScryfallRelatedCardCreateInput;

  @Field(() => ScryfallRelatedCardUpdateInput, { nullable: false })
  update!: ScryfallRelatedCardUpdateInput;
}
