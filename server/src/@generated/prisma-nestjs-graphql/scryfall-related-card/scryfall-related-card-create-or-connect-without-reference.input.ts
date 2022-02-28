import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallRelatedCardWhereUniqueInput } from './scryfall-related-card-where-unique.input';
import { ScryfallRelatedCardCreateWithoutReferenceInput } from './scryfall-related-card-create-without-reference.input';

@InputType()
export class ScryfallRelatedCardCreateOrConnectWithoutReferenceInput {
  @Field(() => ScryfallRelatedCardWhereUniqueInput, { nullable: false })
  where!: ScryfallRelatedCardWhereUniqueInput;

  @Field(() => ScryfallRelatedCardCreateWithoutReferenceInput, {
    nullable: false,
  })
  create!: ScryfallRelatedCardCreateWithoutReferenceInput;
}
