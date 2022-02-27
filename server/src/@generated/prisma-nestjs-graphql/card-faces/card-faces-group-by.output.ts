import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { GraphQLJSON } from 'graphql-type-json';
import { CardFacesCountAggregate } from './card-faces-count-aggregate.output';
import { CardFacesAvgAggregate } from './card-faces-avg-aggregate.output';
import { CardFacesSumAggregate } from './card-faces-sum-aggregate.output';
import { CardFacesMinAggregate } from './card-faces-min-aggregate.output';
import { CardFacesMaxAggregate } from './card-faces-max-aggregate.output';

@ObjectType()
export class CardFacesGroupBy {
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

  @Field(() => CardFacesCountAggregate, { nullable: true })
  _count?: CardFacesCountAggregate;

  @Field(() => CardFacesAvgAggregate, { nullable: true })
  _avg?: CardFacesAvgAggregate;

  @Field(() => CardFacesSumAggregate, { nullable: true })
  _sum?: CardFacesSumAggregate;

  @Field(() => CardFacesMinAggregate, { nullable: true })
  _min?: CardFacesMinAggregate;

  @Field(() => CardFacesMaxAggregate, { nullable: true })
  _max?: CardFacesMaxAggregate;
}
