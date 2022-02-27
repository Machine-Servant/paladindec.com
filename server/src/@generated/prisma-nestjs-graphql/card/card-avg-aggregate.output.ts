import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class CardAvgAggregate {
  @Field(() => Float, { nullable: true })
  arenaId?: number;

  @Field(() => Float, { nullable: true })
  mtgoId?: number;

  @Field(() => Float, { nullable: true })
  mtgoFoilId?: number;

  @Field(() => Float, { nullable: true })
  multiverseIds?: number;

  @Field(() => Float, { nullable: true })
  tcgplayerId?: number;

  @Field(() => Float, { nullable: true })
  tcgplayerEtchedId?: number;

  @Field(() => Float, { nullable: true })
  cardmarketId?: number;

  @Field(() => GraphQLDecimal, { nullable: true })
  cmc?: any;

  @Field(() => Float, { nullable: true })
  edhrecRank?: number;
}
