import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserCreateManyInput {
  @Field(() => String, { nullable: false })
  externalAuthId!: string;

  @Field(() => String, { nullable: false })
  email!: string;

  @HideField()
  createdAt?: Date | string;

  @HideField()
  updatedAt?: Date | string;

  @Field(() => String, { nullable: true })
  id?: string;
}
