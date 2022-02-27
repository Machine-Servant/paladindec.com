import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RelatedCardMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  referenceId?: true;

  @Field(() => Boolean, { nullable: true })
  cardId?: true;

  @Field(() => Boolean, { nullable: true })
  component?: true;

  @Field(() => Boolean, { nullable: true })
  name?: true;

  @Field(() => Boolean, { nullable: true })
  typeLine?: true;

  @Field(() => Boolean, { nullable: true })
  uri?: true;
}
