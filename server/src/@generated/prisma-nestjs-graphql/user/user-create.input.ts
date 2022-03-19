import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { CollectionCreateNestedManyWithoutUserInput } from '../collection/collection-create-nested-many-without-user.input';

@InputType()
export class UserCreateInput {
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

  @Field(() => CollectionCreateNestedManyWithoutUserInput, { nullable: true })
  collections?: CollectionCreateNestedManyWithoutUserInput;
}
