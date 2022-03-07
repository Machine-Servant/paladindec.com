import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallRelatedCardWhereUniqueInput } from './scryfall-related-card-where-unique.input';
import { ScryfallRelatedCardUpdateWithoutReferenceInput } from './scryfall-related-card-update-without-reference.input';
import { ScryfallRelatedCardCreateWithoutReferenceInput } from './scryfall-related-card-create-without-reference.input';

@InputType()
export class ScryfallRelatedCardUpsertWithWhereUniqueWithoutReferenceInput {
  @Field(() => ScryfallRelatedCardWhereUniqueInput, { nullable: false })
  where!: ScryfallRelatedCardWhereUniqueInput;

  @Field(() => ScryfallRelatedCardUpdateWithoutReferenceInput, {
    nullable: false,
  })
  update!: ScryfallRelatedCardUpdateWithoutReferenceInput;

  @Field(() => ScryfallRelatedCardCreateWithoutReferenceInput, {
    nullable: false,
  })
  create!: ScryfallRelatedCardCreateWithoutReferenceInput;
}
