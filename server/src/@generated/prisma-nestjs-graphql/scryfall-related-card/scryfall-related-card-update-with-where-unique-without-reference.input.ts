import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallRelatedCardWhereUniqueInput } from './scryfall-related-card-where-unique.input';
import { ScryfallRelatedCardUpdateWithoutReferenceInput } from './scryfall-related-card-update-without-reference.input';

@InputType()
export class ScryfallRelatedCardUpdateWithWhereUniqueWithoutReferenceInput {
  @Field(() => ScryfallRelatedCardWhereUniqueInput, { nullable: false })
  where!: ScryfallRelatedCardWhereUniqueInput;

  @Field(() => ScryfallRelatedCardUpdateWithoutReferenceInput, {
    nullable: false,
  })
  data!: ScryfallRelatedCardUpdateWithoutReferenceInput;
}
