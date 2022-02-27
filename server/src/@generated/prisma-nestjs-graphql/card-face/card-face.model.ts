import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Card } from '../card/card.model';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { GraphQLJSON } from 'graphql-type-json';

@ObjectType()
export class CardFace {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => Card, { nullable: false })
  card?: Card;

  @Field(() => String, { nullable: false })
  cardId!: string;

  @Field(() => String, { nullable: true })
  artist!: string | null;

  @Field(() => GraphQLDecimal, { nullable: true })
  cmc!: any | null;

  @Field(() => [String], { nullable: true })
  colorIndicator!: Array<string>;

  @Field(() => [String], { nullable: true })
  colors!: Array<string>;

  @Field(() => String, { nullable: true })
  flavorText!: string | null;

  @Field(() => String, { nullable: true })
  illustrationId!: string | null;

  @Field(() => GraphQLJSON, { nullable: true })
  imageUris!: any | null;

  @Field(() => String, { nullable: true })
  layout!: string | null;

  @Field(() => String, { nullable: true })
  loyalty!: string | null;

  @Field(() => String, { nullable: true })
  manaCost!: string | null;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: true })
  oracleId!: string | null;

  @Field(() => String, { nullable: true })
  oracleText!: string | null;

  @Field(() => String, { nullable: true })
  power!: string | null;

  @Field(() => String, { nullable: true })
  printedName!: string | null;

  @Field(() => String, { nullable: true })
  printedText!: string | null;

  @Field(() => String, { nullable: true })
  printedTypeLine!: string | null;

  @Field(() => String, { nullable: true })
  toughness!: string | null;

  @Field(() => String, { nullable: true })
  typeLine!: string | null;

  @Field(() => String, { nullable: true })
  watermark!: string | null;
}
