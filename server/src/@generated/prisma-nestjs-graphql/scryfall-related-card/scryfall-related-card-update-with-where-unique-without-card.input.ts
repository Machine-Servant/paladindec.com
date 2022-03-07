import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallRelatedCardWhereUniqueInput } from './scryfall-related-card-where-unique.input';
import { ScryfallRelatedCardUpdateWithoutCardInput } from './scryfall-related-card-update-without-card.input';

@InputType()
export class ScryfallRelatedCardUpdateWithWhereUniqueWithoutCardInput {
  @Field(() => ScryfallRelatedCardWhereUniqueInput, { nullable: false })
  where!: ScryfallRelatedCardWhereUniqueInput;

  @Field(() => ScryfallRelatedCardUpdateWithoutCardInput, { nullable: false })
  data!: ScryfallRelatedCardUpdateWithoutCardInput;
}
