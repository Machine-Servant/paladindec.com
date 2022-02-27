import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SetMinAggregate {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  code?: string;

  @Field(() => String, { nullable: true })
  mtgoCode?: string;

  @Field(() => String, { nullable: true })
  arenaCode?: string;

  @Field(() => Int, { nullable: true })
  tcgPlayerId?: number;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  setType?: string;

  @Field(() => Date, { nullable: true })
  releasedAt?: Date | string;

  @Field(() => String, { nullable: true })
  blockCode?: string;

  @Field(() => String, { nullable: true })
  block?: string;

  @Field(() => String, { nullable: true })
  parentSetCode?: string;

  @Field(() => Int, { nullable: true })
  cardCount?: number;

  @Field(() => Int, { nullable: true })
  printedSize?: number;

  @Field(() => Boolean, { nullable: true })
  isDigital?: boolean;

  @Field(() => Boolean, { nullable: true })
  isFoilOnly?: boolean;

  @Field(() => Boolean, { nullable: true })
  isNonFoilOnly?: boolean;

  @Field(() => String, { nullable: true })
  scryfallUri?: string;

  @Field(() => String, { nullable: true })
  uri?: string;

  @Field(() => String, { nullable: true })
  iconSvgUri?: string;

  @Field(() => String, { nullable: true })
  searchUri?: string;
}
