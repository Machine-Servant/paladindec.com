import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallRelatedCardWhereInput } from './scryfall-related-card-where.input';

@InputType()
export class ScryfallRelatedCardListRelationFilter {
  @Field(() => ScryfallRelatedCardWhereInput, { nullable: true })
  every?: ScryfallRelatedCardWhereInput;

  @Field(() => ScryfallRelatedCardWhereInput, { nullable: true })
  some?: ScryfallRelatedCardWhereInput;

  @Field(() => ScryfallRelatedCardWhereInput, { nullable: true })
  none?: ScryfallRelatedCardWhereInput;
}
