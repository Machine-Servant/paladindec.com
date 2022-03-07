import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CollectionWhereUniqueInput } from './collection-where-unique.input';
import { CollectionUpdateWithoutUserInput } from './collection-update-without-user.input';

@InputType()
export class CollectionUpdateWithWhereUniqueWithoutUserInput {
  @Field(() => CollectionWhereUniqueInput, { nullable: false })
  where!: CollectionWhereUniqueInput;

  @Field(() => CollectionUpdateWithoutUserInput, { nullable: false })
  data!: CollectionUpdateWithoutUserInput;
}
