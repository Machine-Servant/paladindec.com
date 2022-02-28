import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallPriceWhereInput } from './scryfall-price-where.input';

@ArgsType()
export class DeleteManyScryfallPriceArgs {
  @Field(() => ScryfallPriceWhereInput, { nullable: true })
  where?: ScryfallPriceWhereInput;
}
