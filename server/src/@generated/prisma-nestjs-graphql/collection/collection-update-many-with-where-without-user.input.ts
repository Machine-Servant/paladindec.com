import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CollectionScalarWhereInput } from './collection-scalar-where.input';
import { CollectionUpdateManyMutationInput } from './collection-update-many-mutation.input';

@InputType()
export class CollectionUpdateManyWithWhereWithoutUserInput {
  @Field(() => CollectionScalarWhereInput, { nullable: false })
  where!: CollectionScalarWhereInput;

  @Field(() => CollectionUpdateManyMutationInput, { nullable: false })
  data!: CollectionUpdateManyMutationInput;
}
