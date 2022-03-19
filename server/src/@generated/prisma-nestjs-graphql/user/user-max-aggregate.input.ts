import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  externalAuthId?: true;

  @Field(() => Boolean, { nullable: true })
  email?: true;

  @HideField()
  createdAt?: true;

  @HideField()
  updatedAt?: true;

  @Field(() => Boolean, { nullable: true })
  id?: true;
}
