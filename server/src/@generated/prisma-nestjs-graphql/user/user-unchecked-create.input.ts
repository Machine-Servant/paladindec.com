import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { CollectionUncheckedCreateNestedManyWithoutUserInput } from '../collection/collection-unchecked-create-nested-many-without-user.input';
import { TagUncheckedCreateNestedManyWithoutUserInput } from '../tag/tag-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateInput {
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

  @Field(() => CollectionUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  collections?: CollectionUncheckedCreateNestedManyWithoutUserInput;

  @Field(() => TagUncheckedCreateNestedManyWithoutUserInput, { nullable: true })
  Tag?: TagUncheckedCreateNestedManyWithoutUserInput;
}
