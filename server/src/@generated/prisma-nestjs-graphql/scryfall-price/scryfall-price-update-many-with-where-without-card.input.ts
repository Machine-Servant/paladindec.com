import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallPriceScalarWhereInput } from './scryfall-price-scalar-where.input';
import { ScryfallPriceUpdateManyMutationInput } from './scryfall-price-update-many-mutation.input';

@InputType()
export class ScryfallPriceUpdateManyWithWhereWithoutCardInput {
  @Field(() => ScryfallPriceScalarWhereInput, { nullable: false })
  where!: ScryfallPriceScalarWhereInput;

  @Field(() => ScryfallPriceUpdateManyMutationInput, { nullable: false })
  data!: ScryfallPriceUpdateManyMutationInput;
}
