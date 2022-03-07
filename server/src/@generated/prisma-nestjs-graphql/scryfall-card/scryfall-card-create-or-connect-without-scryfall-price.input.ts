import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardWhereUniqueInput } from './scryfall-card-where-unique.input';
import { ScryfallCardCreateWithoutScryfallPriceInput } from './scryfall-card-create-without-scryfall-price.input';

@InputType()
export class ScryfallCardCreateOrConnectWithoutScryfallPriceInput {
  @Field(() => ScryfallCardWhereUniqueInput, { nullable: false })
  where!: ScryfallCardWhereUniqueInput;

  @Field(() => ScryfallCardCreateWithoutScryfallPriceInput, { nullable: false })
  create!: ScryfallCardCreateWithoutScryfallPriceInput;
}
