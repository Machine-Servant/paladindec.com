import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallRelatedCardWhereUniqueInput } from './scryfall-related-card-where-unique.input';
import { ScryfallRelatedCardCreateWithoutCardInput } from './scryfall-related-card-create-without-card.input';

@InputType()
export class ScryfallRelatedCardCreateOrConnectWithoutCardInput {
  @Field(() => ScryfallRelatedCardWhereUniqueInput, { nullable: false })
  where!: ScryfallRelatedCardWhereUniqueInput;

  @Field(() => ScryfallRelatedCardCreateWithoutCardInput, { nullable: false })
  create!: ScryfallRelatedCardCreateWithoutCardInput;
}
