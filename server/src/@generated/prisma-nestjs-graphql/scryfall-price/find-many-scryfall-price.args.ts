import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallPriceWhereInput } from './scryfall-price-where.input';
import { ScryfallPriceOrderByWithRelationInput } from './scryfall-price-order-by-with-relation.input';
import { ScryfallPriceWhereUniqueInput } from './scryfall-price-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ScryfallPriceScalarFieldEnum } from './scryfall-price-scalar-field.enum';

@ArgsType()
export class FindManyScryfallPriceArgs {
  @Field(() => ScryfallPriceWhereInput, { nullable: true })
  where?: ScryfallPriceWhereInput;

  @Field(() => [ScryfallPriceOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ScryfallPriceOrderByWithRelationInput>;

  @Field(() => ScryfallPriceWhereUniqueInput, { nullable: true })
  cursor?: ScryfallPriceWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [ScryfallPriceScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof ScryfallPriceScalarFieldEnum>;
}
