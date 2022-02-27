import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SetCountAggregate } from './set-count-aggregate.output';
import { SetAvgAggregate } from './set-avg-aggregate.output';
import { SetSumAggregate } from './set-sum-aggregate.output';
import { SetMinAggregate } from './set-min-aggregate.output';
import { SetMaxAggregate } from './set-max-aggregate.output';

@ObjectType()
export class SetGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  code!: string;

  @Field(() => String, { nullable: true })
  mtgoCode?: string;

  @Field(() => String, { nullable: true })
  arenaCode?: string;

  @Field(() => Int, { nullable: true })
  tcgPlayerId?: number;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  setType!: string;

  @Field(() => Date, { nullable: true })
  releasedAt?: Date | string;

  @Field(() => String, { nullable: true })
  blockCode?: string;

  @Field(() => String, { nullable: true })
  block?: string;

  @Field(() => String, { nullable: true })
  parentSetCode?: string;

  @Field(() => Int, { nullable: false })
  cardCount!: number;

  @Field(() => Int, { nullable: true })
  printedSize?: number;

  @Field(() => Boolean, { nullable: false })
  isDigital!: boolean;

  @Field(() => Boolean, { nullable: false })
  isFoilOnly!: boolean;

  @Field(() => Boolean, { nullable: false })
  isNonFoilOnly!: boolean;

  @Field(() => String, { nullable: false })
  scryfallUri!: string;

  @Field(() => String, { nullable: false })
  uri!: string;

  @Field(() => String, { nullable: false })
  iconSvgUri!: string;

  @Field(() => String, { nullable: false })
  searchUri!: string;

  @Field(() => SetCountAggregate, { nullable: true })
  _count?: SetCountAggregate;

  @Field(() => SetAvgAggregate, { nullable: true })
  _avg?: SetAvgAggregate;

  @Field(() => SetSumAggregate, { nullable: true })
  _sum?: SetSumAggregate;

  @Field(() => SetMinAggregate, { nullable: true })
  _min?: SetMinAggregate;

  @Field(() => SetMaxAggregate, { nullable: true })
  _max?: SetMaxAggregate;
}
