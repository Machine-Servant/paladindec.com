import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { GraphQLJSON } from 'graphql-type-json';
import { CardFaceCountAggregate } from './card-face-count-aggregate.output';
import { CardFaceAvgAggregate } from './card-face-avg-aggregate.output';
import { CardFaceSumAggregate } from './card-face-sum-aggregate.output';
import { CardFaceMinAggregate } from './card-face-min-aggregate.output';
import { CardFaceMaxAggregate } from './card-face-max-aggregate.output';

@ObjectType()
export class CardFaceGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  cardId!: string;

  @Field(() => String, { nullable: true })
  artist?: string;

  @Field(() => GraphQLDecimal, { nullable: true })
  cmc?: any;

  @Field(() => [String], { nullable: true })
  colorIndicator?: Array<string>;

  @Field(() => [String], { nullable: true })
  colors?: Array<string>;

  @Field(() => String, { nullable: true })
  flavorText?: string;

  @Field(() => String, { nullable: true })
  illustrationId?: string;

  @Field(() => GraphQLJSON, { nullable: true })
  imageUris?: any;

  @Field(() => String, { nullable: true })
  layout?: string;

  @Field(() => String, { nullable: true })
  loyalty?: string;

  @Field(() => String, { nullable: true })
  manaCost?: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: true })
  oracleId?: string;

  @Field(() => String, { nullable: true })
  oracleText?: string;

  @Field(() => String, { nullable: true })
  power?: string;

  @Field(() => String, { nullable: true })
  printedName?: string;

  @Field(() => String, { nullable: true })
  printedText?: string;

  @Field(() => String, { nullable: true })
  printedTypeLine?: string;

  @Field(() => String, { nullable: true })
  toughness?: string;

  @Field(() => String, { nullable: true })
  typeLine?: string;

  @Field(() => String, { nullable: true })
  watermark?: string;

  @Field(() => CardFaceCountAggregate, { nullable: true })
  _count?: CardFaceCountAggregate;

  @Field(() => CardFaceAvgAggregate, { nullable: true })
  _avg?: CardFaceAvgAggregate;

  @Field(() => CardFaceSumAggregate, { nullable: true })
  _sum?: CardFaceSumAggregate;

  @Field(() => CardFaceMinAggregate, { nullable: true })
  _min?: CardFaceMinAggregate;

  @Field(() => CardFaceMaxAggregate, { nullable: true })
  _max?: CardFaceMaxAggregate;
}
