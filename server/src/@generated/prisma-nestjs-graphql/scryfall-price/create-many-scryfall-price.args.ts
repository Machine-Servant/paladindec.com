import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallPriceCreateManyInput } from './scryfall-price-create-many.input';

@ArgsType()
export class CreateManyScryfallPriceArgs {
  @Field(() => [ScryfallPriceCreateManyInput], { nullable: false })
  data!: Array<ScryfallPriceCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
