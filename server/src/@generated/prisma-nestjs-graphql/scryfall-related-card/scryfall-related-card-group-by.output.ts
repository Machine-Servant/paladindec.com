import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ScryfallRelatedCardCountAggregate } from './scryfall-related-card-count-aggregate.output';
import { ScryfallRelatedCardMinAggregate } from './scryfall-related-card-min-aggregate.output';
import { ScryfallRelatedCardMaxAggregate } from './scryfall-related-card-max-aggregate.output';

@ObjectType()
export class ScryfallRelatedCardGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  referenceId!: string;

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
  createdAt!: Date | string;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;

  @Field(() => ScryfallRelatedCardCountAggregate, { nullable: true })
  _count?: ScryfallRelatedCardCountAggregate;

  @Field(() => ScryfallRelatedCardMinAggregate, { nullable: true })
  _min?: ScryfallRelatedCardMinAggregate;

  @Field(() => ScryfallRelatedCardMaxAggregate, { nullable: true })
  _max?: ScryfallRelatedCardMaxAggregate;
}
