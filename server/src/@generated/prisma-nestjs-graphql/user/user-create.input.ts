import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CollectionCreateNestedManyWithoutUserInput } from '../collection/collection-create-nested-many-without-user.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  externalAuthId!: string;

  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => CollectionCreateNestedManyWithoutUserInput, { nullable: true })
  collections?: CollectionCreateNestedManyWithoutUserInput;

  @HideField()
  createdAt?: Date | string;

  @HideField()
  updatedAt?: Date | string;
}
