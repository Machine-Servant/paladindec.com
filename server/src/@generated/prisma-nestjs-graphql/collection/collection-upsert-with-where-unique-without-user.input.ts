import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CollectionWhereUniqueInput } from './collection-where-unique.input';
import { CollectionUpdateWithoutUserInput } from './collection-update-without-user.input';
import { CollectionCreateWithoutUserInput } from './collection-create-without-user.input';

@InputType()
export class CollectionUpsertWithWhereUniqueWithoutUserInput {
  @Field(() => CollectionWhereUniqueInput, { nullable: false })
  where!: CollectionWhereUniqueInput;

  @Field(() => CollectionUpdateWithoutUserInput, { nullable: false })
  update!: CollectionUpdateWithoutUserInput;

  @Field(() => CollectionCreateWithoutUserInput, { nullable: false })
  create!: CollectionCreateWithoutUserInput;
}
