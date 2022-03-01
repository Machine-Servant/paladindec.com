import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CollectionUpdateInput } from './collection-update.input';
import { CollectionWhereUniqueInput } from './collection-where-unique.input';

@ArgsType()
export class UpdateOneCollectionArgs {
  @Field(() => CollectionUpdateInput, { nullable: false })
  data!: CollectionUpdateInput;

  @Field(() => CollectionWhereUniqueInput, { nullable: false })
  where!: CollectionWhereUniqueInput;
}
