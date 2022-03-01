import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardCreateWithoutCurrentPriceInput } from './card-create-without-current-price.input';
import { CardCreateOrConnectWithoutCurrentPriceInput } from './card-create-or-connect-without-current-price.input';
import { CardUpsertWithoutCurrentPriceInput } from './card-upsert-without-current-price.input';
import { CardWhereUniqueInput } from './card-where-unique.input';
import { CardUpdateWithoutCurrentPriceInput } from './card-update-without-current-price.input';

@InputType()
export class CardUpdateOneWithoutCurrentPriceInput {
  @Field(() => CardCreateWithoutCurrentPriceInput, { nullable: true })
  create?: CardCreateWithoutCurrentPriceInput;

  @Field(() => CardCreateOrConnectWithoutCurrentPriceInput, { nullable: true })
  connectOrCreate?: CardCreateOrConnectWithoutCurrentPriceInput;

  @Field(() => CardUpsertWithoutCurrentPriceInput, { nullable: true })
  upsert?: CardUpsertWithoutCurrentPriceInput;

  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;

  @Field(() => Boolean, { nullable: true })
  delete?: boolean;

  @Field(() => CardWhereUniqueInput, { nullable: true })
  connect?: CardWhereUniqueInput;

  @Field(() => CardUpdateWithoutCurrentPriceInput, { nullable: true })
  update?: CardUpdateWithoutCurrentPriceInput;
}
