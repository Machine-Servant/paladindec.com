import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ScryfallCard } from '../scryfall-card/scryfall-card.model';

@ObjectType()
export class ScryfallRelatedCard {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => ScryfallCard, { nullable: false })
  reference?: ScryfallCard;

  @Field(() => String, { nullable: false })
  referenceId!: string;

  @Field(() => ScryfallCard, { nullable: false })
  card?: ScryfallCard;

  @Field(() => String, { nullable: false })
  cardId!: string;

  @Field(() => String, { nullable: false })
  component!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  typeLine!: string;

  @Field(() => String, { nullable: false })
  uri!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;
}
