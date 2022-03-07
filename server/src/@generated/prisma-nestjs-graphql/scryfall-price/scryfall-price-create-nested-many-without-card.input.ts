import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallPriceCreateWithoutCardInput } from './scryfall-price-create-without-card.input';
import { ScryfallPriceCreateOrConnectWithoutCardInput } from './scryfall-price-create-or-connect-without-card.input';
import { ScryfallPriceCreateManyCardInputEnvelope } from './scryfall-price-create-many-card-input-envelope.input';
import { ScryfallPriceWhereUniqueInput } from './scryfall-price-where-unique.input';

@InputType()
export class ScryfallPriceCreateNestedManyWithoutCardInput {
  @Field(() => [ScryfallPriceCreateWithoutCardInput], { nullable: true })
  create?: Array<ScryfallPriceCreateWithoutCardInput>;

  @Field(() => [ScryfallPriceCreateOrConnectWithoutCardInput], {
    nullable: true,
  })
  connectOrCreate?: Array<ScryfallPriceCreateOrConnectWithoutCardInput>;

  @Field(() => ScryfallPriceCreateManyCardInputEnvelope, { nullable: true })
  createMany?: ScryfallPriceCreateManyCardInputEnvelope;

  @Field(() => [ScryfallPriceWhereUniqueInput], { nullable: true })
  connect?: Array<ScryfallPriceWhereUniqueInput>;
}
