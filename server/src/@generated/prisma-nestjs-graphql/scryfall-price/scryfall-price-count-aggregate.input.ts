import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ScryfallPriceCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  date?: true;

  @Field(() => Boolean, { nullable: true })
  eur?: true;

  @Field(() => Boolean, { nullable: true })
  tix?: true;

  @Field(() => Boolean, { nullable: true })
  usd?: true;

  @Field(() => Boolean, { nullable: true })
  eurFoil?: true;

  @Field(() => Boolean, { nullable: true })
  usdFoil?: true;

  @Field(() => Boolean, { nullable: true })
  usdEtched?: true;

  @Field(() => Boolean, { nullable: true })
  cardId?: true;

  @Field(() => Boolean, { nullable: true })
  currentPriceOfCardId?: true;

  @Field(() => Boolean, { nullable: true })
  _all?: true;
}
