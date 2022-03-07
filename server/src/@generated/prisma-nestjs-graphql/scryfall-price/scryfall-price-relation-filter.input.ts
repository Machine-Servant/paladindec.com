import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallPriceWhereInput } from './scryfall-price-where.input';

@InputType()
export class ScryfallPriceRelationFilter {
  @Field(() => ScryfallPriceWhereInput, { nullable: true })
  is?: ScryfallPriceWhereInput;

  @Field(() => ScryfallPriceWhereInput, { nullable: true })
  isNot?: ScryfallPriceWhereInput;
}
