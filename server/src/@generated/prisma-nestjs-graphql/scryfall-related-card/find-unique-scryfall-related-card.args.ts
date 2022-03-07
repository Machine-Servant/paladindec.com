import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallRelatedCardWhereUniqueInput } from './scryfall-related-card-where-unique.input';

@ArgsType()
export class FindUniqueScryfallRelatedCardArgs {
  @Field(() => ScryfallRelatedCardWhereUniqueInput, { nullable: false })
  where!: ScryfallRelatedCardWhereUniqueInput;
}
