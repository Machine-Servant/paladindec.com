import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ScryfallSetMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  code?: true;

  @Field(() => Boolean, { nullable: true })
  mtgoCode?: true;

  @Field(() => Boolean, { nullable: true })
  arenaCode?: true;

  @Field(() => Boolean, { nullable: true })
  tcgPlayerId?: true;

  @Field(() => Boolean, { nullable: true })
  name?: true;

  @Field(() => Boolean, { nullable: true })
  setType?: true;

  @Field(() => Boolean, { nullable: true })
  releasedAt?: true;

  @Field(() => Boolean, { nullable: true })
  blockCode?: true;

  @Field(() => Boolean, { nullable: true })
  block?: true;

  @Field(() => Boolean, { nullable: true })
  parentSetCode?: true;

  @Field(() => Boolean, { nullable: true })
  cardCount?: true;

  @Field(() => Boolean, { nullable: true })
  printedSize?: true;

  @Field(() => Boolean, { nullable: true })
  isDigital?: true;

  @Field(() => Boolean, { nullable: true })
  isFoilOnly?: true;

  @Field(() => Boolean, { nullable: true })
  isNonFoilOnly?: true;

  @Field(() => Boolean, { nullable: true })
  scryfallUri?: true;

  @Field(() => Boolean, { nullable: true })
  uri?: true;

  @Field(() => Boolean, { nullable: true })
  iconSvgUri?: true;

  @Field(() => Boolean, { nullable: true })
  searchUri?: true;
}
