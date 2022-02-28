import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { ScryfallCardFaceCountAggregate } from './scryfall-card-face-count-aggregate.output';
import { ScryfallCardFaceAvgAggregate } from './scryfall-card-face-avg-aggregate.output';
import { ScryfallCardFaceSumAggregate } from './scryfall-card-face-sum-aggregate.output';
import { ScryfallCardFaceMinAggregate } from './scryfall-card-face-min-aggregate.output';
import { ScryfallCardFaceMaxAggregate } from './scryfall-card-face-max-aggregate.output';

@ObjectType()
export class ScryfallCardFaceGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  cardId!: string;

  @Field(() => String, { nullable: true })
  artist?: string;

  @Field(() => Float, { nullable: true })
  cmc?: number;

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

  @Field(() => ScryfallCardFaceCountAggregate, { nullable: true })
  _count?: ScryfallCardFaceCountAggregate;

  @Field(() => ScryfallCardFaceAvgAggregate, { nullable: true })
  _avg?: ScryfallCardFaceAvgAggregate;

  @Field(() => ScryfallCardFaceSumAggregate, { nullable: true })
  _sum?: ScryfallCardFaceSumAggregate;

  @Field(() => ScryfallCardFaceMinAggregate, { nullable: true })
  _min?: ScryfallCardFaceMinAggregate;

  @Field(() => ScryfallCardFaceMaxAggregate, { nullable: true })
  _max?: ScryfallCardFaceMaxAggregate;
}
