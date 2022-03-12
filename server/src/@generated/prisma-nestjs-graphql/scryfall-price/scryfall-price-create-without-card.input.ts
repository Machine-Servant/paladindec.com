import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { CardCreateNestedOneWithoutCurrentPriceInput } from '../card/card-create-nested-one-without-current-price.input';

@InputType()
export class ScryfallPriceCreateWithoutCardInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: false })
  date!: Date | string;

  @Field(() => Float, { nullable: true })
  eur?: number;

  @Field(() => Float, { nullable: true })
  tix?: number;

  @Field(() => Float, { nullable: true })
  usd?: number;

  @Field(() => Float, { nullable: true })
  eurFoil?: number;

  @Field(() => Float, { nullable: true })
  usdFoil?: number;

  @Field(() => Float, { nullable: true })
  usdEtched?: number;

  @HideField()
  createdAt?: Date | string;

  @HideField()
  updatedAt?: Date | string;

  @Field(() => CardCreateNestedOneWithoutCurrentPriceInput, { nullable: true })
  currentPriceOfCard?: CardCreateNestedOneWithoutCurrentPriceInput;
}
