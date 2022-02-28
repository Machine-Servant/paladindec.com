import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallRelatedCardWhereUniqueInput } from './scryfall-related-card-where-unique.input';
import { ScryfallRelatedCardUpdateWithoutCardInput } from './scryfall-related-card-update-without-card.input';
import { ScryfallRelatedCardCreateWithoutCardInput } from './scryfall-related-card-create-without-card.input';

@InputType()
export class ScryfallRelatedCardUpsertWithWhereUniqueWithoutCardInput {
  @Field(() => ScryfallRelatedCardWhereUniqueInput, { nullable: false })
  where!: ScryfallRelatedCardWhereUniqueInput;

  @Field(() => ScryfallRelatedCardUpdateWithoutCardInput, { nullable: false })
  update!: ScryfallRelatedCardUpdateWithoutCardInput;

  @Field(() => ScryfallRelatedCardCreateWithoutCardInput, { nullable: false })
  create!: ScryfallRelatedCardCreateWithoutCardInput;
}
