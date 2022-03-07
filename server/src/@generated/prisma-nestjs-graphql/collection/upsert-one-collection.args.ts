import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CollectionWhereUniqueInput } from './collection-where-unique.input';
import { CollectionCreateInput } from './collection-create.input';
import { CollectionUpdateInput } from './collection-update.input';

@ArgsType()
export class UpsertOneCollectionArgs {
  @Field(() => CollectionWhereUniqueInput, { nullable: false })
  where!: CollectionWhereUniqueInput;

  @Field(() => CollectionCreateInput, { nullable: false })
  create!: CollectionCreateInput;

  @Field(() => CollectionUpdateInput, { nullable: false })
  update!: CollectionUpdateInput;
}
