import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallRelatedCardUpdateInput } from './scryfall-related-card-update.input';
import { ScryfallRelatedCardWhereUniqueInput } from './scryfall-related-card-where-unique.input';

@ArgsType()
export class UpdateOneScryfallRelatedCardArgs {
  @Field(() => ScryfallRelatedCardUpdateInput, { nullable: false })
  data!: ScryfallRelatedCardUpdateInput;

  @Field(() => ScryfallRelatedCardWhereUniqueInput, { nullable: false })
  where!: ScryfallRelatedCardWhereUniqueInput;
}
