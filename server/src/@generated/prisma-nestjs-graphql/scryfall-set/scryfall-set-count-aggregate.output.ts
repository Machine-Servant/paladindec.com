import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ScryfallSetCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  code!: number;

  @Field(() => Int, { nullable: false })
  mtgoCode!: number;

  @Field(() => Int, { nullable: false })
  arenaCode!: number;

  @Field(() => Int, { nullable: false })
  tcgPlayerId!: number;

  @Field(() => Int, { nullable: false })
  name!: number;

  @Field(() => Int, { nullable: false })
  setType!: number;

  @Field(() => Int, { nullable: false })
  releasedAt!: number;

  @Field(() => Int, { nullable: false })
  blockCode!: number;

  @Field(() => Int, { nullable: false })
  block!: number;

  @Field(() => Int, { nullable: false })
  parentSetCode!: number;

  @Field(() => Int, { nullable: false })
  cardCount!: number;

  @Field(() => Int, { nullable: false })
  printedSize!: number;

  @Field(() => Int, { nullable: false })
  isDigital!: number;

  @Field(() => Int, { nullable: false })
  isFoilOnly!: number;

  @Field(() => Int, { nullable: false })
  isNonFoilOnly!: number;

  @Field(() => Int, { nullable: false })
  scryfallUri!: number;

  @Field(() => Int, { nullable: false })
  uri!: number;

  @Field(() => Int, { nullable: false })
  iconSvgUri!: number;

  @Field(() => Int, { nullable: false })
  searchUri!: number;

  @Field(() => Int, { nullable: false })
  createdAt!: number;

  @Field(() => Int, { nullable: false })
  updatedAt!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
