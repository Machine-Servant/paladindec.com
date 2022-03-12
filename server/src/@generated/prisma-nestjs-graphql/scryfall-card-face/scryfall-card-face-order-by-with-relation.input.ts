import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ScryfallCardOrderByWithRelationInput } from '../scryfall-card/scryfall-card-order-by-with-relation.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ScryfallCardFaceOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => ScryfallCardOrderByWithRelationInput, { nullable: true })
  card?: ScryfallCardOrderByWithRelationInput;

  @Field(() => SortOrder, { nullable: true })
  cardId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  artist?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  cmc?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  colorIndicator?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  colors?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  flavorText?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  illustrationId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  imageUris?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  layout?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  loyalty?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  manaCost?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  oracleId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  oracleText?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  power?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  printedName?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  printedText?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  printedTypeLine?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  toughness?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  typeLine?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  watermark?: keyof typeof SortOrder;

  @HideField()
  createdAt?: keyof typeof SortOrder;

  @HideField()
  updatedAt?: keyof typeof SortOrder;
}
