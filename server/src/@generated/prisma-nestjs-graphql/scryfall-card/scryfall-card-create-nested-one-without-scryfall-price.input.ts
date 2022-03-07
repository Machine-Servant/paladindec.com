import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardCreateWithoutScryfallPriceInput } from './scryfall-card-create-without-scryfall-price.input';
import { ScryfallCardCreateOrConnectWithoutScryfallPriceInput } from './scryfall-card-create-or-connect-without-scryfall-price.input';
import { ScryfallCardWhereUniqueInput } from './scryfall-card-where-unique.input';

@InputType()
export class ScryfallCardCreateNestedOneWithoutScryfallPriceInput {
  @Field(() => ScryfallCardCreateWithoutScryfallPriceInput, { nullable: true })
  create?: ScryfallCardCreateWithoutScryfallPriceInput;

  @Field(() => ScryfallCardCreateOrConnectWithoutScryfallPriceInput, {
    nullable: true,
  })
  connectOrCreate?: ScryfallCardCreateOrConnectWithoutScryfallPriceInput;

  @Field(() => ScryfallCardWhereUniqueInput, { nullable: true })
  connect?: ScryfallCardWhereUniqueInput;
}
