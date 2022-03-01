import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardCreateWithoutCurrentPriceInput } from './card-create-without-current-price.input';
import { CardCreateOrConnectWithoutCurrentPriceInput } from './card-create-or-connect-without-current-price.input';
import { CardWhereUniqueInput } from './card-where-unique.input';

@InputType()
export class CardCreateNestedOneWithoutCurrentPriceInput {
  @Field(() => CardCreateWithoutCurrentPriceInput, { nullable: true })
  create?: CardCreateWithoutCurrentPriceInput;

  @Field(() => CardCreateOrConnectWithoutCurrentPriceInput, { nullable: true })
  connectOrCreate?: CardCreateOrConnectWithoutCurrentPriceInput;

  @Field(() => CardWhereUniqueInput, { nullable: true })
  connect?: CardWhereUniqueInput;
}
