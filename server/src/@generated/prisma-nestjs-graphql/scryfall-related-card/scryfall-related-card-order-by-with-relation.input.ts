import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { ScryfallCardOrderByWithRelationInput } from '../scryfall-card/scryfall-card-order-by-with-relation.input';

@InputType()
export class ScryfallRelatedCardOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  referenceId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  cardId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  component?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  typeLine?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  uri?: keyof typeof SortOrder;

  @HideField()
  createdAt?: keyof typeof SortOrder;

  @HideField()
  updatedAt?: keyof typeof SortOrder;

  @Field(() => ScryfallCardOrderByWithRelationInput, { nullable: true })
  card?: ScryfallCardOrderByWithRelationInput;

  @Field(() => ScryfallCardOrderByWithRelationInput, { nullable: true })
  reference?: ScryfallCardOrderByWithRelationInput;
}
