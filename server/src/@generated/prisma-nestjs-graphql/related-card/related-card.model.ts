import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Card } from '../card/card.model';

@ObjectType()
export class RelatedCard {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => Card, { nullable: false })
  reference?: Card;

  @Field(() => String, { nullable: false })
  referenceId!: string;

  @Field(() => Card, { nullable: false })
  card?: Card;

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
}
