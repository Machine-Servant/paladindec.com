import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CollectionUpdateManyMutationInput } from './collection-update-many-mutation.input';
import { CollectionWhereInput } from './collection-where.input';

@ArgsType()
export class UpdateManyCollectionArgs {
  @Field(() => CollectionUpdateManyMutationInput, { nullable: false })
  data!: CollectionUpdateManyMutationInput;

  @Field(() => CollectionWhereInput, { nullable: true })
  where?: CollectionWhereInput;
}
