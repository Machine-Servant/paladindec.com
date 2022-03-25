import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

@ObjectType()
export class ScryfallDailyProcessLog {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => Boolean, { nullable: false, defaultValue: false })
  isCompleted!: boolean;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;
}
